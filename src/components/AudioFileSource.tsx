import React, { useContext, useEffect, useState } from "react";
import { Button, Grid, Text, Progress } from "@nextui-org/react";

import { globalStateContext } from "../context";
import { formatSeconds } from "../util";

export default function AudioFileSource({ url }: { url: string }) {
  const { audioContext, rawAssets } = useContext(globalStateContext);

  const [isPlaying, setIsPlaying] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [audioElement, setAudioElement] = useState<HTMLAudioElement>();
  const [audioFileNode, setAudioFileNode] = useState<MediaElementAudioSourceNode>();

  useEffect(() => {
    if (!audioElement) {
      const audioElement = new Audio(url);
      setAudioElement(audioElement);

      const track = audioContext.createMediaElementSource(audioElement);
      setAudioFileNode(track);
      rawAssets.set(url, track);
    }

    if (audioElement && audioElement.src !== url) {
      audioElement.src = url
    }    
  }, [url]);


  return (
    <Grid.Container gap={2} justify="center" direction="column">
      <Grid justify="center" alignItems="center">
        <Progress value={seconds} max={audioElement ? audioElement.duration : 10} />
      </Grid>
      <Grid.Container direction="row" justify="space-evenly" alignItems="center">
        <Grid>
          <Text>
            {formatSeconds(seconds)}
          </Text>
        </Grid>
        <Grid>
          <Button 
            rounded 
            data-playing="false" 
            role="switch" 
            aria-checked="false"
            onPress={() => {
              if (!audioFileNode) return;

              isPlaying ? onPause(audioFileNode, audioContext, setSeconds) : onPlay(audioFileNode, audioContext, setSeconds, setIsPlaying);
              setIsPlaying(!isPlaying);
            }}
          >
            <Text>{"Play/Pause"}</Text>
          </Button>
        </Grid>
      </Grid.Container>
    </Grid.Container>
  );
}

function onPlay(
  audioFileNode: MediaElementAudioSourceNode, 
  audioContext: AudioContext,
  setSeconds: React.Dispatch<React.SetStateAction<number>>,
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>,
) {
  audioFileNode.connect(audioContext.destination);
  audioContext.resume();

  audioFileNode.mediaElement.play();
  audioFileNode.mediaElement.addEventListener("timeupdate", () => {
    setSeconds(audioFileNode.mediaElement.currentTime);
  });
  audioFileNode.mediaElement.addEventListener("ended", () => {
    setSeconds(0);
    setIsPlaying(false);
  });
}

function onPause(
  audioFileNode: MediaElementAudioSourceNode, 
  audioContext: AudioContext,
  setSeconds: React.Dispatch<React.SetStateAction<number>>,
) {
  audioFileNode.disconnect(audioContext.destination);
  audioContext.suspend();

  audioFileNode.mediaElement.pause();
  audioFileNode.mediaElement.removeEventListener("timeupdate", () => {});
  setSeconds(0);
}