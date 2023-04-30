export type Youtube = {
  channelName: string
  channelId: string
  videoId: string
  viewCount: number
  title: string
  thumbnail: string
}

export const streamLink = (videoId: string) => {
  return `https://www.youtube.com/watch?v=${videoId}`
}
