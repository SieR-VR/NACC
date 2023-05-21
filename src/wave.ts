export interface WaveRaw {
    name: string;
    data: number[];
}

export interface Wave {
    name: string;
    samples: number;
    data: [number, number][];
}

export function mergeWave(...waves: WaveRaw[]): WaveRaw {
    const result: WaveRaw = {
        name: waves.map(w => w.name).join(" + "),
        data: new Array(waves[0].data.length)
    };

    for (let i = 0; i < result.data.length; i++) {
        result.data[i] = waves.reduce((sum, w) => sum + w.data[i], 0);
    }

    return result;
}