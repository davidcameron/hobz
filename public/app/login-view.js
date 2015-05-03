(function() {
  'use strict';

  var Marionette = require('backbone.marionette');


  var View = Marionette.ItemView.extend({
    tagName: 'div',
    template: require('./login-template.handlebars')
  });

  module.exports = View;

}());
