<template>
  <footer>
    <footer-link
      v-for="(link, index) in footerLinks"
      :key="index"
      :spanClass="link.spanClass"
      :text="link.text"
    />
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

// components
import FooterLink from '~/components/common/atoms/FooterLink.vue';

// interfaces
import { IFooterLink } from '~/src/components/common/atoms/footerLink';

@Component({
  components: {
    FooterLink
  }
})
export default class CommonFooter extends Vue {
  private footerLinks: IFooterLink[] = [
    {
      spanClass: 'is-primary',
      text: 'バトル'
    },
    {
      spanClass: 'is-error',
      text: '設定'
    },
  ];
}
</script>

<style scoped>
footer {
  margin: 0 auto;
}
</style>
