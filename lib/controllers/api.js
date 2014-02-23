'use strict';

var mongoose = require('mongoose'),
    Thing = mongoose.model('Thing');

/**
 * Get awesome things
 */
exports.programmes = function(req, res) {
    return Thing.find({})
        .sort({startTime : 'asc'})
        .execFind(function(err, things){
        if (!err) {
            return res.json(things);
        } else {
            return res.send(err);
        }
    });
};