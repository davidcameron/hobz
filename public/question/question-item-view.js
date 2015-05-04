(function() {
  'use strict';

  var Marionette = require('backbone.marionette');
  var questionTemplate = require('./question-item-template.handlebars');

  var QuestionView = Marionette.LayoutView.extend({
    tagName: 'div',
    className: 'well',
    template: questionTemplate,
    events: {
      'click .js-submit-answer': 'showAnswerForm'
    },
    regions: {
      answerForm: '.region-answer-form'
    },
    showAnswerForm: function () {
      var AnswerView = require('../answer/answer-form-view');
      this.getRegion('answerForm').show(new AnswerView());
      this.$('.js-submit-answer').hide();
    },
    templateHelpers: function () {
      var isFirst = this.options.childIndex === 0;

      return {
        isFirst: isFirst
      };
    },
    onRender: function () {
      if (this.options.childIndex === 0) {
        this.showAnswerForm();
      }
    }
  });

  module.exports = QuestionView;

}());
