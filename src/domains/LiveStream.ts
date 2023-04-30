import type { Twitch } from "./Twitch"
import type { Youtube } from "./Youtube"

export type LiveStream = {
  twitch: {
    streams: Twitch[]
    isError: boolean
  }
  youtube: {
    streams: Youtube[]
    isError: boolean
  }
  updatedAt: string
}
