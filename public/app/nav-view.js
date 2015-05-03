(function() {
  'use strict';

  var Marionette = require('backbone.marionette');


  var View = Marionette.ItemView.extend({
    tagName: 'div',
    className: 'container-fluid',
    template: require('./nav-template.handlebars')
  });

  module.exports = View;

}());
