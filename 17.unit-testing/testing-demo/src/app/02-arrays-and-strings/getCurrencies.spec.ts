import { getCurrencies } from './getCurrencies';

describe('getCurrencies', () => {
    it('It should contains currencies', () => {
        const result = getCurrencies();
        expect(result).toContain('USD');
        expect(result).toContain('AUD');
        expect(result).toContain('EUR');
    });
});