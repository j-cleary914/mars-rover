let rover = {
  pos: [0, 0, "N"],
  updatePos: function(initialPos, instructions) {
    console.log({ initialPos }, { instructions });
    this.pos = initialPos;

    return this.pos;
  }
};

rover.updatePos([1, 2, "N"], "");

module.exports = rover.updatePos;
