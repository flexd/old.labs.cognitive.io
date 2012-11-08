//Filename: boilerplate.js

define([
  'text!templates/nav.html'
], function(NavigationTemplate){
  var NavigationView = Backbone.View.extend({
    el: '#nav',
    initialize: function () {
      this.render();
    },
    render: function () {
      $(this.el).html(_.template(NavigationTemplate));
    }
  });
  return NavigationView;
});
