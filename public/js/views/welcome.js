//Filename: welcome.js

define([
  //'text!/templates/welcome.html', // The index! :)
  'views/nav',
  'views/articlelist'
], function(NavigationView, ArticleListView){
  // Above we have passed in jQuery, Underscore and Backbone
  // They will not be accessible in the global scope
  
  var WelcomeView = Backbone.View.extend({
    el: $('#content'),
    initialize: function () {
      this.render();
    },
    render: function() {
      this.nav = new NavigationView();
      this.articles = new ArticleListView({el: this.$(".articles") });
      this.articles.render();
    } 
  });
  return WelcomeView;
  // What we return here will be used by other modules
});
