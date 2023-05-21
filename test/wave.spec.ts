import { Wave, WaveRaw, mergeWave } from "../src/wave";
import { makeSingleSinWave } from "./util";

describe('wave', () => {
    it('make wave with zero', () => {
        const wave = makeSingleSinWave(100, 0, 100);

        expect(wave.data);
    });
});