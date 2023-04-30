import { api } from "@/src/utils/api"
import type { LiveStream } from "@/src/domains/LiveStream"

export const fetchLiveStreams = async () => {
  const res = await api.get<{data: LiveStream}>('/liveStreams')
  return res.data
}
