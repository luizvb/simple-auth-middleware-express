const VALID_KEYS_PATH = __dirname + '/valid-keys.txt';
const fs = require('fs');
const shortid = require('shortid');
// To generate a unique API KEY, use shortid.generate()
const LINE_ENDING = require('os').EOL;

module.exports = function (req, res) {
    const apiKey = shortid.generate();
    const apiKeyExists = fs.existsSync(VALID_KEYS_PATH);
    if (apiKeyExists) {
        fs.appendFileSync(VALID_KEYS_PATH, apiKey + LINE_ENDING);
    } else {
        fs.writeFileSync(VALID_KEYS_PATH, apiKey + LINE_ENDING);
    }
    res.status(201).send({apiKey});
};

