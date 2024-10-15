const { format } = require('timeago.js');

const helpers = {};

// TRANSFORM THE TIMESTAMP FORMAT
helpers.timeago = (timestamp) => {
    return format(timestamp);
};

module.exports = helpers;