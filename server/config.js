const path = require('path');

const LISTEN_PORT = process.env.LISTEN_PORT || 8080;
const LISTEN_HOST = process.env.LISTEN_HOST || 'localhost';
const PUBLIC_PATH = path.join(__dirname, '..', 'public');

module.exports = {
  LISTEN_PORT, LISTEN_HOST, PUBLIC_PATH,
};
