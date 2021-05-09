const { caesarCipher } = require('./caesar-cipher');
const stream = require('stream');
const { getConsoleArg } = require('./console-arg');
const objTransform = new stream.Transform({ objectMode: true });
const fs = require('fs');
const option = getConsoleArg();
let old = '';
if (option.output) {
  old = fs.readFileSync(option.output, 'utf8') + '\n';
}

objTransform._transform = function (chunk, encoding, done) {
  try {
    done(
      null,
      caesarCipher(chunk.toString(), Number(option.shift), option.action, old)
    );
  } catch (e) {
    done(e);
  }
};

module.exports = { objTransform };
