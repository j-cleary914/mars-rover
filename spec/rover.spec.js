const { expect } = require("chai");
const updatePos = require("../rover");

describe("updatePos", () => {
  it("sets initial position correctly when no instructions to move are provided", () => {
    expect(updatePos([1, 2, "N"], "")).to.eql([1, 2, "N"]);
    expect(updatePos([2, 4, "E"], "")).to.eql([2, 4, "E"]);
    expect(updatePos([4, 4, "S"], "")).to.eql([4, 4, "S"]);
  });
});
