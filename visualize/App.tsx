import React, { useState } from "react";

import AudioPreview from "./components/AudioPreview";
import WaveRawGraph from "./components/WaveRawGraph";
import WaveGraph from "./components/WaveGraph";

import { WaveRaw } from "../src/wave";
import { toFreqDomain } from "../src/fft";


export default function App({ waves }: { waves: WaveRaw[] }) {
  return (
    <>
      {waves.map((wave, i) => (
        <div key={i}>
          <div style={{ display: 'flex' }}>
            <WaveRawGraph {...wave} />
            <WaveGraph {...toFreqDomain(wave)} />
          </div>
          <AudioPreview {...wave} />
        </div>
      ))}
    </>
  );
}