import React from "react";
import { NextUIProvider, Grid } from "@nextui-org/react";

import AudioFileSource from "./components/AudioFileSource";
import AudioPreview from "./components/AudioPreview";

export default function App({ audios }: { audios?: string[] }) {
  return (
    <NextUIProvider>
      <Grid.Container gap={2} justify="space-between">
        {audios && audios.map((audio, i) => (
          <Grid xs={4} key={i}>
            <AudioFileSource url={audio} />
          </Grid>
        ))}
      </Grid.Container>
    </NextUIProvider>
  );
}