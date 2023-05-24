import React, { useState, useEffect } from "react";

import { WaveRaw } from "../../src/wave";

const AudioContext = window.AudioContext;
const audioContext = new AudioContext();

export default function WaveGraph({ data, name }: WaveRaw) {
  const [source, setSource] = useState<AudioBufferSourceNode>(audioContext.createBufferSource());

  useEffect(() => {
    const audioBuffer = audioContext.createBuffer(1, data.length, 44100);
    const audioBufferData = audioBuffer.getChannelData(0);
    
    data.forEach((amp, i) => {
      audioBufferData[i] = amp;
    });

    source.buffer = audioBuffer;
    source.connect(audioContext.destination);

    setSource(source);
    console.log(source);
  }, [source, data]);

  return (
    <div>
      <h2>{name}</h2>
      <button onClick={() => source.start()}>{"Click this to play audio"}</button>
    </div>
  );
}