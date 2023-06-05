import { createContext } from "react";

interface GlobalState {
    audioContext: AudioContext;
    rawAssets: Map<string, AudioNode>;
}

const AudioContext = window.AudioContext;
const audioContext = new AudioContext();

export const globalStateContext = createContext<GlobalState>({
    audioContext,
    rawAssets: new Map()
});