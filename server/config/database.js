const crypto = require('crypto').randomBytes(256).toString('hex');

module.exports = {
    url: 'mongodb://localhost:27017/mean_angular2',
    secret: crypto,
    db: 'mean_angular2'
};