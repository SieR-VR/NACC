import React, { useState, useEffect, useContext } from "react";

import { globalStateContext } from "../context";

export default function AudioPreview({ src, name }: { src: AudioBuffer, name: string }) {
  const { audioContext } = useContext(globalStateContext); 
  const [source, setSource] = useState<AudioBufferSourceNode>(audioContext.createBufferSource());

  useEffect(() => {
    if (!source.buffer || source.buffer !== src)
      source.buffer = src;
  }, [src]);

  return (
    <div>
      <h2>{name}</h2>
      <button onClick={onPlayButtonClick(audioContext, source)}>{"Click this to play audio"}</button>
    </div>
  );
}

function onPlayButtonClick(audioContext: AudioContext, source: AudioBufferSourceNode) {
  return () => {
    source.connect(audioContext.destination);
    
    setTimeout(() => {
      source.disconnect(audioContext.destination);
    }, 1000);
  }
}