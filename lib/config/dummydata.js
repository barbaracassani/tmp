'use strict';

var mongoose = require('mongoose'),
  Thing = mongoose.model('Thing'),
  when = require('when'),
  fs = require('fs'),
  nodefn = require('when/node/function');

function readFile() {

    var path = __dirname + '/programmes.json';


    fs.readFile(path, function(err, data){

        var obj = JSON.parse(data);

        if (!obj) {
            console.warn("File ", path, " is not a valid json file");
            return false;

        } else {

            Object.keys(obj).forEach(function(val) {
                createProgram(val, obj[val]);
            }, this);
            return true;

        }

    }.bind(this));

}


function endTimeCalc(startDate, duration) {
    var start = new Date(startDate).getTime();
    return new Date(start + duration * 1000);
};

function lastEnd(val) {
    var prevLastEnded = lastEnded;
    lastEnded = val;
    if (prevLastEnded && prevLastEnded > val) {
        return true;
    }
    return false;
}

function createProgram(key, val) {
    var endT = endTimeCalc(val.startTime, val.duration);
    Thing.create({
        title : val.title,
        _id : key,
        startTime : new Date(val.startTime),
        endTime : endT,
        duration : val.duration
    }, function(err, val) {
        if (err) console.warn(err);
        console.warn('Success! ', val)
    })
}

function bootstrapDb() {
    Thing.find({}).remove(readFile());
    console.warn('Database is now (probably) populated')
}

bootstrapDb();

