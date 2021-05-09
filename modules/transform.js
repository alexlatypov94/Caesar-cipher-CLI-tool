const { pipeline } = require('stream');
const { objTransform } = require('./streams');
const fs = require('fs');
const { errors } = require('./errors');

function transform(inp, out) {
  let inputFile = inp ? fs.createReadStream(inp) : process.stdin;
  let outputFile = out ? fs.createWriteStream(out) : process.stdout;

  pipeline(inputFile, objTransform, outputFile, (err) => {
    if (err) errors(new Error(err));
  });
}

module.exports = { transform };
