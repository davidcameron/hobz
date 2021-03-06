(function() {
  'use strict';

  var Marionette = require('backbone.marionette');


  var SignupView = Marionette.ItemView.extend({
    tagName: 'div',
    template: require('./signup-template.handlebars'),
    events: {
      'submit #signup-form': 'signupSubmit',
      'change #show-password': 'toggleShowPassword'
    },
    signupSubmit: function (e) {
      e.preventDefault();
      this.events['keyup input'] = 'showErrors';
      this.delegateEvents();
      this.showErrors();
      if (this.isValid()) {
        this.submit();
      }
    },
    isValid: function () {
      if (!$('#email-input').val()) {
        return false;
      }

      if (!$('#password-input').val()) {
        return false;
      }

      return true;
    },
    submit: function () {
      console.log('did submit');
    },
    showErrors: function () {
      if (!$('#email-input').val()) {
        $('#email-group').addClass('has-error');
        $('#email-empty-error').removeClass('invisible');
      } else {
        $('#email-group').removeClass('has-error');
        $('#email-empty-error').addClass('invisible');
      }

      if (!$('#password-input').val()) {
        $('#password-group').addClass('has-error');
        $('#password-empty-error').removeClass('invisible');
      } else {
        $('#password-group').removeClass('has-error');
        $('#password-empty-error').addClass('invisible');
      }
    },
    toggleShowPassword: function () {
      if ($('#show-password').is(':checked')) {
        $('#password-input').attr('type', 'text');
      } else {
        $('#password-input').attr('type', 'password');
      }
    }
  });

  module.exports = SignupView;

}());
