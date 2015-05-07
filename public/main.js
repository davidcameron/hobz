(function() {
  'use strict';

  var $ = require('jquery');
  var Backbone = require('backbone');
  Backbone.$ = $ || jQuery; // Some dumb dependancy bug
  var Marionette = require('backbone.marionette');

  var app = new Marionette.Application();

  app.module('session', function () {
    this.isLoggedIn = function () {
      return false;
    }
  });

  app.addRegions({
    contentRegion: '#content-region',
    navRegion: '#nav-region'
  });

  var AppRouter = Marionette.AppRouter.extend({
    onRoute: function () {
      var navView = require('./app/nav-view');
      app.navRegion.show(new navView());
    },
    routes: {
      '': 'homeRoute',
      'setup-org': 'setupOrgRoute',
      'login': 'loginRoute',
      'signup': 'signupRoute',
    },
    homeRoute: function () {
      if (!app.session.isLoggedIn()) {
        var landingView = require('./app/landing-view');
        app.contentRegion.show(new landingView());
      } else {
        var appView = require('./app/app-view');
        app.contentRegion.show(new appView());
      }
    },
    setupOrgRoute: function () {
      var setupOrgView = require('./app/setup-org-view');
      app.contentRegion.show(new setupOrgView());
    },
    loginRoute: function () {
      var loginView = require('./app/login-view');
      app.contentRegion.show(new loginView());
    },
    signupRoute: function () {
      var signupView = require('./app/signup-view');
      app.contentRegion.show(new signupView());
    }
  });

  app.addInitializer(function () {
    var router = new AppRouter();
    Backbone.history.start();
  });

  app.start();
}());
