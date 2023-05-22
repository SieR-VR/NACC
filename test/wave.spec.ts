import { writeFileSync } from "node:fs";
import { createServer } from "vite";

import { Wave, WaveRaw, mergeWave } from "../src/wave";
import { makeSingleSinWave } from "./util";

describe('wave', () => {
    it('make wave with zero', () => {
        const wave = makeSingleSinWave(100, 0, 100);

        expect(wave).toBeDefined();
        expect(wave.data).toBeDefined();
    });

    it('make two wave and merge', () => {
        const wave1 = makeSingleSinWave(100, 10, 100);
        const wave2 = makeSingleSinWave(50, 20, 100);

        const merged = mergeWave(wave1, wave2);

        expect(merged).toBeDefined();
        expect(merged.data).toBeDefined();
        expect(merged.data.length).toBe(wave1.data.length);
    });
});