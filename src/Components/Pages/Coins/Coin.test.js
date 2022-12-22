const functions  = require("./Coin");

test('Add Coin', () => {
    expect(functions.add(2, 2)).toBe(4);
}
);

