(function() {
  'use strict';

  var Marionette = require('backbone.marionette');


  var View = Marionette.LayoutView.extend({
    tagName: 'div',
    template: require('./app-template.handlebars'),
    regions: {
      questionFormRegion: '#question-form-region',
      questionListRegion: '#questoin-list-region'
    },
    onRender: function () {
      var QuestionFormView = require('../question/question-add-view');
      this.getRegion('questionFormRegion').show(new QuestionFormView());
    }
  });

  module.exports = View;

}());
