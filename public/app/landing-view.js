(function() {
  'use strict';

  var Marionette = require('backbone.marionette');


  var LandingView = Marionette.ItemView.extend({
    tagName: 'div',
    template: require('./landing-template.handlebars')
  });

  module.exports = LandingView;

}());
