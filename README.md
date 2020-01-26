# Mars-Rover problem

This is my solution to the mars rover problem provided.

## Design / Assumptions

I have made each 'rover' an object, i.e. it stores its own position and containing a function allowing it to process instructions as a string. As no desired behaviour was specified for what to do if a rover were to be told to move past the edge of the plataeu, I have assumed the rover will only be given 'good' instructions, ie mission command wont send a rover plunging off the edge of the plataeu. Were bad instructions to be sent, the rover could either stop excuting instructions were a subsequent command to take it over the edge (probably ideal) or ignore and skip over the offending letter and continue to execute any subsequent letters that would not take it over the edge.

## Getting Started

These instructions will get you a copy of my solution up and running on your local machine.

### Prerequisites

In order to get this running on your local machine you will need the following installed

[NodeJS](https://nodejs.org/en/)
[npm](https://www.npmjs.com/)

### Installing

Cloning to a local machine

- Fork the repository to your own github
- open up a terminal and copy the git link and enter the command

```
git clone --your forked git URL --
```

Then you can install mocha and chai which are required for testing with

```
npm install
```

## Available scripts

In the directory of the cloned project you can run

```
npm test
```

to run the test suite.
