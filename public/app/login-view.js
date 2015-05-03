(function() {
  'use strict';

  var Marionette = require('backbone.marionette');


  var LoginView = Marionette.ItemView.extend({
    tagName: 'div',
    template: require('./login-template.handlebars'),
    events: {
      'submit #login-form': 'loginSubmit',
    },
    loginSubmit: function () {
      this.events['keyup input'] = 'showErrors';
      this.delegateEvents();
      this.showErrors();
    },
    showErrors: function () {
      if(!$('#email-input').val()) {
        $('#email-group').addClass('has-error');
        $('#email-empty-error').removeClass('invisible');
      } else {
        $('#email-group').removeClass('has-error');
        $('#email-empty-error').addClass('invisible');
      }

      if(!$('#password-input').val()) {
        $('#password-group').addClass('has-error');
        $('#password-empty-error').removeClass('invisible');
      } else {
        $('#password-group').removeClass('has-error');
        $('#password-empty-error').addClass('invisible');
      }
    }
  });

  module.exports = LoginView;

}());
