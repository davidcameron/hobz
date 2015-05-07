(function() {
  'use strict';

  var Marionette = require('backbone.marionette');


  var SetupOrgView = Marionette.ItemView.extend({
    tagName: 'div',
    template: require('./setup-org-template.handlebars')
  });

  module.exports = SetupOrgView;

}());
