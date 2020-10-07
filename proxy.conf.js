//require('dotenv').config();

//if (process.env.ENVIRONMENT === 'local') {
module.exports = {
  '/api/backend': {
    'target': 'http://localhost:8080',
    'secure': false
  }
};
/*} else {
  module.exports = {
    '/api': {
      'target': `https://${process.env.COUNTRY}.sp-${process.env.ENVIRONMENT}.kaufland`,
      'secure': false,
      'changeOrigin': true,
      'headers': {
        'Cookie': `SESSION=${process.env.SESSION}`
      }
    },
    '/phonebook': {
      'target': `https://${process.env.COUNTRY}.sp-${process.env.ENVIRONMENT}.kaufland`,
      'secure': false,
      'changeOrigin': true,
      'headers': {
        'Cookie': `SESSION=${process.env.SESSION}`
      }
    }
  };
}*/
