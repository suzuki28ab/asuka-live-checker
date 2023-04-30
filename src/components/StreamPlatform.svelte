<script lang="ts">
  export let title: string;
  export let isError: boolean;
  const platformClass = title.toLowerCase();
</script>

<div>
  <h2 class="platform-title {platformClass}">{title}</h2>
  {#if isError}
    <p>エラーが発生しました。管理者へお問い合わせください。</p>
  {:else}
    <slot />
  {/if}
</div>

<style lang="scss">
  .platform-title {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    margin: 1rem 0;
    color: #6E9C8B;
    text-transform: uppercase;
    letter-spacing: 1px;
    &.twitch {
      color: #9146FF;
    }
    &.youtube {
      color: #FF0000;
    }
  }
</style>
