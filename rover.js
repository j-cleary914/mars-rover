let rover = {
  pos: [0, 0, "N"],
  updatePos: function(initialPos, instructions) {
    this.pos = initialPos;

    for (let i = 0; i < instructions.length; i++) {
      //handles command to turn right
      if (instructions[i] === "R") {
        if (this.pos[2] === "N") {
          this.pos[2] = "E";
        } else if (this.pos[2] === "E") {
          this.pos[2] = "S";
        } else if (this.pos[2] === "S") {
          this.pos[2] = "W";
        } else {
          this.pos[2] = "N";
        }
      }
      //handles command to turn left
      else if (instructions[i] === "L") {
        if (this.pos[2] === "N") {
          this.pos[2] = "W";
        } else if (this.pos[2] === "E") {
          this.pos[2] = "N";
        } else if (this.pos[2] === "S") {
          this.pos[2] = "E";
        } else {
          this.pos[2] = "S";
        }
      }
      //handles command to turn move forwards
      else if (instructions[i] === "M") {
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
    }

    return this.pos;
  }
};

rover.updatePos([1, 2, "N"], "");

module.exports = rover.updatePos;
