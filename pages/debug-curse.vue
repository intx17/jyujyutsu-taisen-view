<template>
  <section class="container">
    <form>
      <div>
        <label for="name">name</label>
        <input id="name" v-model="name" type="text">
      </div>
      <div>
        <label for="min-negative">NEGATIVE</label>
        <input id="min-negative" v-model="negative" type="number">
      </div>
      <div>
        <label for="max-hp">MAX HP</label>
        <input id="max-hp" v-model="maxHP" type="number">
      </div>
      <div>
        <label for="attack">ATTACK</label>
        <input id="attack" v-model="attack" type="number">
      </div>
      <div>
        <label for="hitRate">HIT RATE</label>
        <input id="hitRate" v-model="hitRate" type="number">
      </div>
      <div>
        <label class="upload-content-space user-photo default">
          <input ref="file" class="file-button" type="file" @change="upload">
          UPLOAD
        </label>

        <div v-if="imgSrc" class="uploaded">
          <label class="upload-content-space user-photo">
            <input
              ref="file"
              class="file-button"
              type="file"
              @change="upload"
            >
            <div>
              <img class="user-photo-image" :src="imgSrc">
            </div>
          </label>
        </div>
        <div v-if="isValidInputs">
          <button type="button" @click="save">
            SAVE
          </button>
        </div>
      </div>
    </form>
  </section>
</template>

<script lang="ts">
import { Storage } from 'aws-amplify'
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  layout: 'default',
  middleware: ['auth']
})
export default class DebugCurse extends Vue {
  private name: string = 'curseName';
  private negative: string = '1000';
  private maxHP: string = '100';
  private attack: string = '10';
  private hitRate: string = '100';
  private imgSrc: string | null = null;
  private file: any = null;

  // methods
  private get isValidInputs (): boolean {
    const negative = Math.floor(Number(this.negative))
    const maxHP = Math.floor(Number(this.maxHP))
    const attack = Math.floor(Number(this.attack))
    const hitRate = Number(this.hitRate)

    const result = !!this.name &&
      (Number.isInteger(negative) && negative > 0) &&
      (Number.isInteger(maxHP) && maxHP > 0) &&
      (Number.isInteger(attack) && attack > 0) &&
      (Number.isInteger(hitRate) && hitRate > 0 && hitRate <= 100) &&
      !!this.imgSrc &&
      !!this.file

    return result
  }

  // methods
  async upload (event: any) {
    const files = event.target.files || event.dataTransfer.files
    const file = files[0]

    if (this.checkFile(file)) {
      this.file = file
      const picture: any = await this.getBase64(file)
      this.imgSrc = picture
    }
  }

  getBase64 (file: any) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = error => reject(error)
    })
  }

  checkFile (file: any) {
    let result = true
    const SIZE_LIMIT = 5000000 // 5MB
    // キャンセルしたら処理中断
    if (!file) {
      result = false
    }
    // jpeg か png 関連ファイル以外は受付けない
    if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
      result = false
    }
    // 上限サイズより大きければ受付けない
    if (file.size > SIZE_LIMIT) {
      result = false
    }
    return result
  }

  async dbInsert () {
    await this.$createCurse({
      name: this.name,
      negative: Number(this.negative),
      maxHP: Number(this.maxHP),
      attack: Number(this.attack),
      hitRate: Number(this.hitRate) / 100,
      imgSrc: `curse/${this.name}.png`
    })
  }

  async storageUpload () {
    await Storage.put(`curse/${this.name}.png`, this.file, {
      level: 'protected', // レベルの宣言
      contentType: 'image/png' // file形式
    }).catch(err => window.alert(err))
  }

  async save () {
    if (!this.isValidInputs) {
      window.alert('invalid input founds')
      return
    }
    await this.dbInsert()
    await this.storageUpload()
  }
}
</script>

<style scoped>
.user-photo {
  cursor: pointer;
  outline: none;
}

.user-photo.default {
  align-items: center;
  background-color: #0074fb;
  border: 1px solid #0051b0;
  border-radius: 2px;
  box-sizing: border-box;
  display: inline-flex;
  font-weight: 600;
  justify-content: center;
  letter-spacing: 0.3px;
  color: #fff;
  height: 4rem;
  padding: 0 1.6rem;
  max-width: 177px;
}

.user-photo.default:hover {
  background-color: #4c9dfc;
}

.user-photo.default:active {
  background-color: #0051b0;
}

.user-photo-image {
  max-width: 85px;
  display: block;
}

.user-photo-image:hover {
  opacity: 0.8;
}

.file-button {
  display: none;
}

.uploaded {
  align-items: center;
  display: flex;
}
</style>
