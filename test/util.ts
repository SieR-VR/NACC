import { WaveRaw } from "../src/wave";

export function makeSingleSinWave(waveLength: number, amplitude: number, samples: number): WaveRaw {
    const result = new Array(samples);

    for (let i = 0; i < samples; i++) {
        result[i] = Math.sin(2 * Math.PI * i / waveLength) * amplitude;
    }

    return {
        name: `sin(${waveLength}x)`,
        data: result
    };
}
