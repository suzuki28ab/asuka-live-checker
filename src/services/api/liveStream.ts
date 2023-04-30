import { api } from "@/utils/api"
import type { LiveStream } from "@/domains/LiveStream"

export const fetchLiveStreams = async () => {
  const res = await api.get<{data: LiveStream}>('/liveStreams')
  return res.data
}
