import { compute } from './compute';

describe('compute', () => {
    it('It should be 0 if negative', () => {
        const result = compute(-1);
        expect(result).toBe(0);
    });

    it('It should be increase by one if value is positive', () => {
        const result = compute(1);
        expect(result).toBe(2);
    });
});