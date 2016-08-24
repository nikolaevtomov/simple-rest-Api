const config = require('./config');

function getDbConnectionString() {
  return 'mongodb://' + config.uname + ':' + config.pwd + '@ds029585.mlab.com:29585/starwars';
}

module.exports = getDbConnectionString;
