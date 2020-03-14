function sum(a, b) {
    return a + b;
}

describe('Simple test', () => {
    it('sum', () => {
        expect(sum(2, 2)).toBe(4);
    });
})