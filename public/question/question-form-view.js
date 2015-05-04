(function() {
  'use strict';

  var Marionette = require('backbone.marionette');


  var QuestionView = Marionette.ItemView.extend({
    tagName: 'div',
    template: require('./question-form-template.handlebars'),
    events: {
      'submit #question-form': 'questionSubmit',
    },
    questionSubmit: function () {
      this.events['keyup input'] = 'showErrors';
      this.delegateEvents();
      this.showErrors();
      if (this.isValid()) {
        this.submit();
      }
    },
    isValid: function () {
      if (!$('#question-text-input').val()) {
        return false;
      }

      return true;
    },
    submit: function () {
      var QuestionModel = require('./question-model');
      var questionText = $('#question-text-input').val();

      this.model = new QuestionModel({
        question_text: questionText
      });

      this.triggerMethod('add:question', this.model);
      delete this.events['keyup input'];
      this.delegateEvents();
      $('#question-text-input').val('');
    },
    showErrors: function () {
      if(!$('#question-text-input').val()) {
        $('#question-group').addClass('has-error');
        $('#question-empty-error').removeClass('invisible');
      } else {
        $('#question-group').removeClass('has-error');
        $('#question-empty-error').addClass('invisible');
      }
    }
  });

  module.exports = QuestionView;

}());
