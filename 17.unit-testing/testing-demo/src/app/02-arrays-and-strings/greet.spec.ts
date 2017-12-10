import { greet } from './greet';

describe('greet', () => {
    it('It should be 0 if negative', () => {
        expect(greet('Mosh')).toContain('Mosh');
    });
});