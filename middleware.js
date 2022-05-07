const fs = require('fs');
const VALID_KEYS_PATH = __dirname + '/valid-keys.txt';

module.exports = function (req, res, next) {
    const apiKey = req.headers['x-api-key'] || null;
    const apiKeyExists = fs.existsSync(VALID_KEYS_PATH);
    if (apiKeyExists && apiKey) {
        const validKeys = fs.readFileSync(VALID_KEYS_PATH, 'utf8').split('\n');
        if (validKeys.includes(apiKey)) {
            return next();
        }
    }
    res.status(401).send('Unauthorized');
}
