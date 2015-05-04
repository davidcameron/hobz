(function() {
  'use strict';

  var Marionette = require('backbone.marionette');
  var questionTemplate = require('./question-item-template.handlebars');

  var QuestionView = Marionette.ItemView.extend({
    tagName: 'div',
    className: 'well',
    template: questionTemplate
  });

  module.exports = QuestionView;

}());
