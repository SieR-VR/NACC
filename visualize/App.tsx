import React, { useState } from "react";

import AudioPreview from "./components/AudioPreview";
import WaveGraph from "./components/WaveGraph";

import { WaveRaw } from "../src/wave";

export default function App({ waves }: { waves: WaveRaw[] }) {
  return (
    <>
      {waves.map((wave, i) => (
        <div key={i}>
          <WaveGraph {...wave} />
          <AudioPreview {...wave} />
        </div>
      ))}
    </>
  );
}