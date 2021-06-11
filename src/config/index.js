const dotenv = require('dotenv');
const path = require('path');

function loadEnvVars() {
  if (process.env.NODE_ENV !== 'heroku') {
    const pathToEnvFile = path.resolve(__dirname, '..', '..', '.env');
    dotenv.config({ path: pathToEnvFile });
  }
}

module.exports = { loadEnvVars };
