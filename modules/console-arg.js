const { Command } = require('commander');
const programm = new Command();
const { errors } = require('./errors');
const fs = require('fs');

function getConsoleArg() {
  programm
    .option('-s, --shift <number>', 'shift')
    .option('-a, --action [type]', 'encode decode', '')
    .option('-i, --input [path]', 'input', '')
    .option('-o, --output [path]', 'output', '')
    .parse(process.argv);
  const options = programm.opts();

  if (options.action !== 'encode' && 'decode') {
    errors(new Error('Incorecct data --action, please use encode or decode'));
  }

  if (!options.shift || !Number.isInteger(+options.shift)) {
    errors(new Error('Incorecct data --shift, please enter value'));
  }

  if (options.input) {
    const isInput = fs.existsSync(options.input);
    if (!isInput) {
      errors(new Error("Input file doesn't exist"));
    }
  }

  if (options.output) {
    const isOutput = fs.existsSync(options.output);
    if (!isOutput) {
      errors(new Error("Output file doesn't exist"));
    }
  }

  return options;
}

module.exports = { getConsoleArg };
