(function() {
  'use strict';

  var Marionette = require('backbone.marionette');
  var answerFormTemplate = require('./answer-form-template.handlebars');

  var AnswerFormView = Marionette.ItemView.extend({
    tagName: 'form',
    template: answerFormTemplate
  });

  module.exports = AnswerFormView;

}());
