<script lang="ts">
  import LiveStream from './LiveStream.svelte'
  import type { Youtube } from '../domains/Youtube'
  import { streamLink } from '../domains/Youtube'

  export let isError: boolean
  export let streams: Youtube[]
</script>

<h2 class="platform-title youtube">Youtube</h2>
{#if isError}
  <p class="error-message">エラーが発生しました。管理者へお問い合わせください。</p>
{:else if streams.length === 0}
  <p class="no-live-streams-message">ライブ配信中のチャンネルはありません。</p>
{:else}
  <section class="live-streams">
    {#each streams as stream}
      <LiveStream title={stream.title} user={stream.channelName} thumbnail={stream.thumbnail} streamHref={streamLink(stream.videoId)} />
    {/each}
  </section>
{/if}

<style lang="scss">
  .platform-title {
    font-size: 20px;
    font-weight: bold;
    padding: 1rem;
    color: #6e9c8b;
    text-transform: uppercase;
    letter-spacing: 1px;
    &.youtube {
      color: #ff0000;
    }
  }
  .live-streams {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 1rem;
    padding: 1rem;
    justify-items: center;
  }

  .no-live-streams-message {
    font-size: 1.2rem;
    padding: 1rem;
    color: #666;
  }

  .error-message {
    font-size: 1.2rem;
    padding: 1rem;
    color: #ff0000;
  }

  @media (max-width: 600px) {
    .platform-title {
      text-align: center;
    }
    .no-live-streams-message {
      text-align: center;
    }
  }
</style>
