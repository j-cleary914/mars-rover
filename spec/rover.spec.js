const { expect } = require("chai");
const updatePos = require("../rover");

describe("updatePos", () => {
  it("sets initial position correctly when no instructions to move are provided", () => {
    expect(updatePos([1, 2, "N"], "")).to.eql([1, 2, "N"]);
    expect(updatePos([2, 4, "E"], "")).to.eql([2, 4, "E"]);
    expect(updatePos([4, 4, "S"], "")).to.eql([4, 4, "S"]);
  });

  it("updates bearing correctly when given single instruction to turn right", () => {
    expect(updatePos([1, 1, "N"], "R")).to.eql([1, 1, "E"]);
    expect(updatePos([1, 1, "E"], "R")).to.eql([1, 1, "S"]);
    expect(updatePos([1, 1, "S"], "R")).to.eql([1, 1, "W"]);
    expect(updatePos([1, 1, "W"], "R")).to.eql([1, 1, "N"]);
  });
  it("updates bearing correctly when given single instruction to turn left", () => {
    expect(updatePos([1, 1, "N"], "L")).to.eql([1, 1, "W"]);
    expect(updatePos([1, 1, "E"], "L")).to.eql([1, 1, "N"]);
    expect(updatePos([1, 1, "S"], "L")).to.eql([1, 1, "E"]);
    expect(updatePos([1, 1, "W"], "L")).to.eql([1, 1, "S"]);
  });
  it("updates position correctly when given single instruction to turn move forwards", () => {
    expect(updatePos([1, 1, "N"], "M")).to.eql([1, 2, "N"]);
    expect(updatePos([1, 1, "E"], "M")).to.eql([2, 1, "E"]);
    expect(updatePos([1, 1, "S"], "M")).to.eql([1, 0, "S"]);
    expect(updatePos([1, 1, "W"], "M")).to.eql([0, 1, "W"]);
  });
  it("handles longer instructions", () => {
    expect(updatePos([1, 1, "N"], "MMRMRMLMLMMML")).to.eql([3, 5, "W"]);
    expect(
      updatePos([0, 0, "E"], "MMMMMLMMMMMLMMMMMLMMMMLMMMMLMMMLMMMLMMLMMLMMLMLM")
    ).to.eql([2, 3, "S"]);
    expect(updatePos([1, 2, "N"], "LMLMLMLMM")).to.eql([1, 3, "N"]);
    expect(updatePos([3, 3, "E"], "MMRMMRMRRM")).to.eql([5, 1, "E"]);
  });
});
