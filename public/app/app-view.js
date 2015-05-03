(function() {
  'use strict';

  var Marionette = require('backbone.marionette');


  var View = Marionette.CompositeView.extend({
    tagName: 'div',
    template: require('./app-template.handlebars')
  });

  module.exports = View;

}());
