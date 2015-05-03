(function() {
  'use strict';

  var $ = require('jquery');
  require('backbone').$ = $ || jQuery; // Some dumb dependancy bug
  var Marionette = require('backbone.marionette');

  var app = new Marionette.Application();

  app.addRegions({
    contentRegion: '#content-region'
  });

  app.addInitializer(function () {
    $('#content-region').html('<h1>Hello World!</h1>');
  });

  app.start();
}());
