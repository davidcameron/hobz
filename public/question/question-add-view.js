(function() {
  'use strict';

  var Marionette = require('backbone.marionette');


  var QuestionView = Marionette.ItemView.extend({
    tagName: 'div',
    template: require('./question-add.handlebars'),
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
      console.log('did submit');
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
