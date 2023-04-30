<script lang="ts">
  import { onMount } from "svelte";
  import streamStore from "@/src/stores/liveStreamStore"

  onMount(() => {
    streamStore.loadStreams();
  });
</script>

<div>
  <p>test</p>
  <div>
    {#if $streamStore.loading}
      <p>Loading...</p>
    {:else if $streamStore.isError}
      <p>エラーが発生しました</p>
    {:else}
      <ul>
        {#each $streamStore.twitch.streams as t}
          <li>{t.title}</li>
        {/each}
      </ul>
    {/if}
  </div>
</div>
