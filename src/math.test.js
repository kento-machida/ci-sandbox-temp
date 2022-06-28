const math = require('./math')

test('adds 1+2 to equal 3', () => {
    expect(math.math(1, 2)).toBe(3);
});
