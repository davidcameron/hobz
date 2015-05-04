(function() {
  'use strict';

  var Marionette = require('backbone.marionette');


  var View = Marionette.LayoutView.extend({
    tagName: 'div',
    template: require('./app-template.handlebars'),
    regions: {
      questionFormRegion: '#question-form-region',
      questionListRegion: '#question-list-region'
    },
    childEvents: {
      'add:question': 'addQuestion'
    },
    onRender: function () {
      var QuestionFormView = require('../question/question-form-view');
      this.getRegion('questionFormRegion').show(new QuestionFormView());

      var QuestionListView = require('../question/question-list-view');
      var QuestionCollection = require('../question/question-collection');

      this.questionCollection = new QuestionCollection([
        {question_text: "How do I do some stuff?"},
        {question_text: "What is this thing?"},
        {question_text: "Where you at?"}
      ]);

      this.getRegion('questionListRegion').show(new QuestionListView(
        {collection: this.questionCollection}
      ));
    },
    addQuestion: function (questionView, question) {
      this.questionCollection.add(question, {at: 0});
    }
  });

  module.exports = View;

}());
