const { caesarCipher } = require('./caesar-cipher');
const stream = require('stream');
const { getConsoleArg } = require('./console-arg');
const objTransform = new stream.Transform({ objectMode: true });

const option = getConsoleArg();

objTransform._transform = function (chunk, encoding, done) {
  try {
    done(
      null,
      caesarCipher(chunk.toString(), Number(option.shift), option.action)
    );
  } catch (e) {
    done(e);
  }
};

module.exports = { objTransform };
