<template>
  <section class="container">
    <news-header
      :text="newsText"
    />
    <trends-dialog />
    <curse-container
      class="index-curse-container"
      @on-click-curse-image="openTrendsDialog"
    />
    <player-container
      class="index-player-container"
      commands="commands"
      @on-click-attack-button="playerAttack"
    />
  </section>
</template>

<script lang="ts">
import moment from 'moment'
import { Component, Vue } from 'nuxt-property-decorator'
import { playerStore, curseStore, battleStore } from '~/utils/storeAccessor'

// components
import NewsHeader from '~/components/battle/molecules/NewsHeader.vue'
import CurseContainer from '~/components/battle/organisms/CurseContainer.vue'
import PlayerContainer from '~/components/battle/organisms/PlayerContainer.vue'
import TrendsDialog from '~/components/battle/atoms/TrendsDialog.vue'
import { IBattle } from '~/src/graphql/domain/battle'
import { ICurse } from '~/src/graphql/domain/curse'
import { ICommand } from '~/src/graphql/domain/command'
import { UpdateBattleInput } from '~/src/API'

@Component({
  layout: 'default',
  middleware: ['auth'],
  components: {
    NewsHeader,
    PlayerContainer,
    CurseContainer,
    TrendsDialog
  },
  async asyncData (context) {
    try {
      const props = {
        newsText: ''
      }

      const now = moment()
      let infectedNumber = 0
      if (playerStore.player === null || !playerStore.player.id) {
        window.alert('ユーザーデータが存在しません')
        return
      }
      const prefecture: string = playerStore.player.prefecture

      const fetchInfectedDataResult = await context.app.$fetchInfectedData({
        date: now.format('YYYY-MM-DD')
      })
      const infectedData = fetchInfectedDataResult.infectedData

      if (infectedData) {
        const parsedInfectedData = JSON.parse(JSON.parse(infectedData.content))
        infectedNumber = Number(parsedInfectedData.data47[prefecture])
        props.newsText = `${prefecture}の感染者数は${infectedNumber}人です`
      } else {
        const fetchYesterdayInfectedDataResult = await context.app.$fetchInfectedData({
          date: now.add(-1, 'day').format('YYYY-MM-DD')
        })
        const yesterdayInfectedData = fetchYesterdayInfectedDataResult.infectedData

        if (yesterdayInfectedData.content) {
          const parsedInfectedData = JSON.parse(JSON.parse(yesterdayInfectedData.content))
          infectedNumber = Number(parsedInfectedData.data47[prefecture])
          props.newsText = `${prefecture}の感染者数は${infectedNumber}人です`
        } else {
          props.newsText = '感染者数データが存在しません'
        }
      }

      // 領域展開
      battleStore.setIsAreaExpansion(infectedNumber >= 300)

      return props
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(JSON.stringify(e))
    }
  }
})
export default class Battle extends Vue {
  private newsText!: string;

  // methods
  private async playerAttack () {
    const activeCommand = playerStore.activeCommand
    const curse = curseStore.curse
    const copiedBattle: IBattle = JSON.parse(JSON.stringify(battleStore.battleInProgress))

    if (!activeCommand) {
      window.alert('コマンドが選択されていません')
      return
    }

    if (!curse) {
      window.alert('呪霊が存在しません')
      return
    }

    if (!copiedBattle) {
      window.alert('進行中のバトルが存在しません')
    }

    const playerDamage = this.calcCurseAttackDamage(curse, activeCommand)
    const curseDamage = this.calcPlayerAttackDamage(activeCommand)

    this.setBattleDamages(copiedBattle, playerDamage, curseDamage)
    this.setBattleHistories(copiedBattle, playerDamage, curse.name, curseDamage)

    battleStore.setBattleInProgress(copiedBattle)

    const updateInput: UpdateBattleInput = {
      id: copiedBattle.id,
      curseHP: copiedBattle.curseHP,
      playerHP: copiedBattle.playerHP,
      histories: copiedBattle.histories
    }

    const battleIsEnded = copiedBattle.playerHP <= 0 || copiedBattle.curseHP <= 0
    if (battleIsEnded) {
      updateInput.inProgress = false
      await this.updatedDB(updateInput)
      await this.setNewBattle()
    } else {
      await this.updatedDB(updateInput)
      // 揺らす
      this.shakeCurse()
    }
  }

  private updatedDB (input: UpdateBattleInput) {
    this.$updateBattle(input)
  }

  private async setNewBattle () {
    if (!playerStore.player) {
      window.alert('プレイヤーが存在しません')
      return
    }

    const fetchNewBattleResult = await this.$fetchNewBattle({
      playerID: playerStore.player.id
    })
    const battle = fetchNewBattleResult.battle

    battleStore.setBattleInProgress(battle)
    const copied: IBattle = JSON.parse(JSON.stringify(battle))
    if (copied) {
      const fetchCurseResult = await this.$fetchCurse({
        id: copied.curseID
      })
      const curse = fetchCurseResult.curse
      curseStore.setCurse(curse)

      copied.inProgress = true

      const updateInput: UpdateBattleInput = {
        id: copied.id,
        inProgress: true
      }
      // update DB
      this.updatedDB(updateInput)
    }
  }

  private calcPlayerAttackDamage (command: ICommand) {
    const rand = Math.random()
    const isCritical = command.criticalRate >= rand

    if (isCritical) {
      return Math.pow(command.attack, 2.5)
    }

    return command.attack
  }

  private calcCurseAttackDamage (curse: ICurse, playerCommand: ICommand) {
    if (battleStore.isAreaExpansion && playerCommand.isOutdoor) {
      return curse.attack
    }

    const rand = Math.random()
    const isHit = curse.hitRate >= rand

    return isHit ? curse.attack : 0
  }

  private setBattleDamages (battle: IBattle, playerDamage: number, curseDamage: number): void {
    const playerHP = (battle.playerHP - playerDamage) > 0
      ? battle.playerHP - playerDamage
      : 0
    const curseHP = (battle.curseHP - curseDamage) > 0
      ? battle.curseHP - curseDamage
      : 0
    battle.playerHP = playerHP
    battle.curseHP = curseHP
  }

  private setBattleHistories (battle: IBattle, playerDamage: number, curseName: string, curseDamage: number): void {
    let playerDamageSentence = ''
    if (playerDamage > 0) {
      playerDamageSentence = `プレイヤーに${playerDamage}のダメージ!`
    } else {
      playerDamageSentence = 'プレイヤーは攻撃を避けた!'
    }

    if (battle.playerHP <= 0) {
      playerDamageSentence += 'プレイヤーは死亡した。'
    }

    let curseDamageSentence = `${curseName}に${curseDamage}のダメージ!`
    if (battle.curseHP <= 0) {
      curseDamageSentence += `${curseName}を倒した!`
    }

    const histories = battleStore.battleInProgressHistories.slice()
    histories.push(playerDamageSentence)
    histories.push(curseDamageSentence)
    const sliced = histories.slice(-10)
    // save to store
    battleStore.setBattleInProgressHistories(sliced)
    const json = JSON.stringify(sliced.join('\n'))
    battle.histories = json
  }

  private shakeCurse () {
    if (curseStore.shaking) {
      return
    }
    curseStore.setShaking(true)
    setTimeout(() => curseStore.setShaking(false), 3000)
  }

  private openTrendsDialog () {
    battleStore.setIsTrendsDialogOpen(true)
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  font-family: 'Nu KinakoMochi Reg';
}
.index-curse-container {
  margin: 15px 5% 0px 5%;
}
.index-player-container {
  margin: 20px 5% 0px 5%;
}
</style>
