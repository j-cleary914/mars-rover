let rover = {
  pos: [0, 0, "N"],
  updatePos: function(initialPos, instructions) {
    console.log({ initialPos }, { instructions });
    this.pos = initialPos;

    for (let i = 0; i < instructions.length; i++) {
      console.log(instructions[0]);
    }

    if (instructions === "R") {
      if (this.pos[2] === "N") {
        this.pos[2] = "E";
      } else if (this.pos[2] === "E") {
        this.pos[2] = "S";
      } else if (this.pos[2] === "S") {
        this.pos[2] = "W";
      } else {
        this.pos[2] = "N";
      }
    } else if (instructions === "L") {
      if (this.pos[2] === "N") {
        this.pos[2] = "W";
      } else if (this.pos[2] === "E") {
        this.pos[2] = "N";
      } else if (this.pos[2] === "S") {
        this.pos[2] = "E";
      } else {
        this.pos[2] = "S";
      }
    } else if (instructions === "M") {
      if (this.pos[2] === "N") {
        this.pos[1]++;
      } else if (this.pos[2] === "E") {
        this.pos[0]++;
      } else if (this.pos[2] === "S") {
        this.pos[1]--;
      } else {
        this.pos[0]--;
      }
    }

    return this.pos;
  }
};

rover.updatePos([1, 2, "N"], "");

module.exports = rover.updatePos;
