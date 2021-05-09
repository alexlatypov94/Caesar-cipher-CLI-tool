const { getConsoleArg } = require('./modules/console-arg');
const { transform } = require('./modules/transform');

const options = getConsoleArg();

transform(options.input, options.output);

