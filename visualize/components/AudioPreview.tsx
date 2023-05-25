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

    if (!source.buffer) 
      source.buffer = audioBuffer;

    source.buffer && source.buffer.copyFromChannel(audioBufferData, 0);
    source.loop = true;

    source.start();
  }, [data]);

  return (
    <div>
      <h2>{name}</h2>
      <button onClick={onPlayButtonClick(source)}>{"Click this to play audio"}</button>
    </div>
  );
}

function onPlayButtonClick(source: AudioBufferSourceNode) {
  return () => {
    source.connect(audioContext.destination);
    
    setTimeout(() => {
      source.disconnect(audioContext.destination);
    }, 1000);
  }
}