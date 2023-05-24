export interface WaveRaw {
    name: string;
    data: number[];
}

export interface Wave {
    name: string;
    samples: number;
    data: [number, number][];
}
