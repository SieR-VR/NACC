import { Wave, WaveRaw } from "./wave";

// @internal
export function fft(input: number[]): number[] {
    const n = input.length;
    if (n === 1) {
        return input;
    }
    const even = new Array(n / 2);
    const odd = new Array(n / 2);
    for (let i = 0; i < n / 2; i++) {
        even[i] = input[i * 2];
        odd[i] = input[i * 2 + 1];
    }
    const q = fft(even);
    const r = fft(odd);
    const y = new Array(n);
    for (let k = 0; k < n / 2; k++) {
        const kth = -2 * k * Math.PI / n;
        const wk = Math.cos(kth) + Math.sin(kth) * 1;
        y[k] = q[k] + wk * r[k];
        y[k + n / 2] = q[k] - wk * r[k];
    }
    return y;
}

export function toTimeDomain(input: WaveRaw): Wave {
    const data = fft(input.data);
    const result: Wave = {
        name: input.name,
        samples: input.data.length,
        data: new Array(input.data.length)
    };

    for (let i = 0; i < input.data.length; i++) {
        result.data[i] = [i, data[i]];
    }

    return result;
}