<script lang="ts">
  import { replaceThumbnailUrl } from '../domains/Twitch'

  export let title: string
  export let user: string
  export let thumbnail: string
  export let streamHref: string
</script>

<a href={streamHref} {title} target="_blank">
  <div class="live-stream">
    <img src={replaceThumbnailUrl(thumbnail)} alt={`Thumbnail for ${title}`} width="320" height="180" />
    <h2>{title}</h2>
    <p class="user">{user}</p>
  </div>
</a>

<style lang="scss">
  a {
    width: 100%;
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  .live-stream {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: box-shadow 0.3s ease;
    padding: 0.5em;
    position: relative;
    overflow: hidden;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      transition: all 0.3s ease;
    }

    img {
      width: 100%;
      height: auto;
      display: block;
      object-fit: cover;
    }

    h2 {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 18px;
      font-weight: bold;
      color: #333;
    }

    .user {
      font-size: 14px;
      font-weight: bold;
      color: #555;
    }
  }
</style>
