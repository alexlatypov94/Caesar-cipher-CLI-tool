# Node.js Caesar cipher CLI tool

The application is used to encrypt and decrypt using the Caesar cipher.
It transform only latin letters.

## How to install

1. Download or clone this repository `git clone https://github.com/alexlatypov94/Caesar-cipher-CLI-tool.git` or `git clone git@github.com:alexlatypov94/Caesar-cipher-CLI-tool.git`
2. Change directory to "caesar-cipher-node.js" `git checkout caesar-cipher-cli-tool`
3. Install dependencies. `npm i` or `npm install`

## How to use

Options:

- -s, --shift: cipher shift. Positive or negative number.
- -a, --action: action. Use encode to encrypt text and decode to decrypt.
- -i, --input: input file. Use '/' as prefix to url (Optional).
- -o, --output: output file. Use '/' as prefix to url (Optional).

## Examples:

`node index --action encode --shift 7 --input input.txt --output output.txt`

`node index -a encode -s -7 -i input.txt -o output.txt`

`node index -a encode --shift 1 -o output.txt`

`node index -a decode --shift -1 -i input.txt`

`node index -a decode -s 1`

## Files

- index.js - Executable file.
- modules/caesar-cipher.js - Caesar cipher function.
- modules/console-arg.js - Options creation and handling.
- modules/transform.js - Transform stream creation.
- modules/errors.js - Function for error custom generating
- modules/streams.js
