import { writable } from "svelte/store";
import { fetchLiveStreams } from "@/services/api/liveStream";
import type { LiveStream } from "../domains/LiveStream";

type InitialState = LiveStream & {
  loading: boolean;
  isError: boolean;
}

const initialState: InitialState = {
  twitch: {
    streams: [],
    isError: false
  },
  youtube: {
    streams: [],
    isError: false
  },
  loading: true,
  isError: false,
  updatedAt: ""
};

const { subscribe, update } = writable(initialState);

export async function loadStreams() {
  try {
    const data = await fetchLiveStreams();
    update((state) => ({ ...state, ...data, loading: false }));
  } catch (e) {
    update((state) => ({ ...state, isError: true, loading: false }));
  }
}

export default { subscribe, loadStreams };
