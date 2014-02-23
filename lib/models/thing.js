'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
/**
 * Thing Schema
 */


var ThingSchema = new Schema({
    _id : String,
    startTime : Date,
    endTime : Date,
    duration : Number,
    title : String
}, { id: false });

/**
 * Validations
 */
/*
ThingSchema.path('awesomeness').validate(function (num) {
  return num >= 1 && num <= 10;
}, 'Awesomeness must be between 1 and 10');
*/

mongoose.model('Thing', ThingSchema);
