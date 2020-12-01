<template>
  <header class="news-header">
    <p class="news-header-scroll">
      <span class="news-header-text">
        {{ text }}
      </span>
    </p>
    <div class="log-out-btn-container">
      <log-out-button />
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import { Auth } from 'aws-amplify';
import { authStore } from '~/utils/storeAccessor';

// components
import LogOutButton from '~/components/common/atoms/LogOutButton.vue';

@Component({
  components: {
    LogOutButton,
  }
})
export default class NewsHeader extends Vue {
  @Prop({ type: String, required: true, default: '' })
  private text!: string

  // methods
  private async signOut () {
    await Auth.signOut()
      .catch((error) => console.log(error));

    authStore.setIsLoggedIn(false);
  }
}
</script>

<style scoped>
.news-header {
  width: 100%;
  height: 2rem;
  display: flex;
  flex-direction: row;
  background: #212529;
  overflow: hidden;
  text-align: center;
}
.news-header-scroll {
  margin: 0;
  width: 80%;
  padding-left: 80%;
  display: inline-block;
  white-space: nowrap;
  line-height: 1em;
  animation: scrollNewsHeaderText 6s linear infinite;
}
.news-header-text {
  line-height: 2rem;
  color: #fff;
}
@keyframes scrollNewsHeaderText {
  0% { transform: translateX(0)}
  100% { transform: translateX(-100%)}
}
.log-out-btn-container {
  width: 20%;
  height: 2rem;
}
</style>
