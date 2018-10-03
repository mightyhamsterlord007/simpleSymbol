const SimpleSymbols = require("./SimpleSymbols");

test("SimpleSymbols is a function", () => {
    expect(typeof SimpleSymbols).toBe("function");
});

test("SimpleSymbols 1", () => {
    expect(SimpleSymbols("===a==b+==s=")).toBe(false);
});

test("SimpleSymbols 2", () => {
    expect(SimpleSymbols("+++a+++c+s+")).toBe(true);
});

test("SimpleSymbols 3", () => {
    expect(SimpleSymbols("cccc++cc+ss=s=")).toBe(false);
});