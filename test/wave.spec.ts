import { writeFileSync } from "node:fs";
import { createServer } from "vite";

import { Wave, WaveRaw } from "../src/wave";
import { toFreqDomain, toTimeDomain } from "../src/fft";

describe('wave', () => {
    it('make wave with zero', () => {
        const wave = toTimeDomain({
            data: [[0, 0]],
            name: 'zero',
            samples: 100
        });

        expect(wave).toBeDefined();
        expect(wave.data).toBeDefined();
    });

    it('make two wave and merge', () => {
        const wave1 = toTimeDomain({
            data: [[100, 2], [200, 3], [300, 2]],
            name: 'wave1',
            samples: 100
        });

        expect(wave1).toBeDefined();
        expect(wave1.data).toBeDefined();
    });
});