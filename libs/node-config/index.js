console.log('NODE CONFIG WORKING');
process.env.NODE_CONFIG_DIR = './config/node';
module.exports = require('config');
