(function() {
  'use strict';

  var Backbone = require('backbone');


  var QuestionCollection = Backbone.Collection.extend({
    model: require('./question-model')
  });

  module.exports = QuestionCollection;

}());
