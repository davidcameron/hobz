(function() {
  'use strict';

  var Marionette = require('backbone.marionette');

  var QuestionListView = Marionette.CollectionView.extend({
    childView: require('./question-item-view')
  });

  module.exports = QuestionListView;

}());
