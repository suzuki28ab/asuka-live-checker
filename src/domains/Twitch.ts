export type Twitch = {
  user_name: string
  user_login: string
  title: string
  viewer_count: number
  started_at: string
  thumbnail_url: string
}

export const replaceThumbnailUrl = (thumbnailUrl: string) => {
  return thumbnailUrl.replace("{width}", "320").replace("{height}", "180")
}

export const streamLink = (userName: string) => {
  return `https://twitch.tv/${userName}`
}
