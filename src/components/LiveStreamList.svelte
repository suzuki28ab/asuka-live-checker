<script lang="ts">
  import { onMount } from 'svelte'
  import streamStore from '@/src/stores/liveStreamStore'
  import TwitchStreams from './TwitchStreams.svelte'
  import YoutubeStreams from './YoutubeStreams.svelte'

  onMount(() => {
    streamStore.loadStreams()
  })
</script>

<div>
  <p class="last-updated">最終更新日時: {$streamStore.updatedAt}</p>
  {#if $streamStore.loading}
    <p>Loading...</p>
  {:else}
    <TwitchStreams isError={$streamStore.twitch.isError} streams={$streamStore.twitch.streams} />
    <YoutubeStreams isError={$streamStore.youtube.isError} streams={$streamStore.youtube.streams} />
  {/if}
</div>

<style>
  .last-updated {
    font-size: 0.9rem;
    color: #333;
    margin-bottom: 1rem;
    padding: 1rem;
  }
</style>
