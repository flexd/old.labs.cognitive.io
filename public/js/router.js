  // Filename: router.js
define([
  'views/welcome',
  'views/articlelist'
  //'jquery',
  //'underscore',
  //'backbone'
], function(WelcomeView, ArticleListView){
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      'hello': 'dontPanic',
      'articles': 'getArticles',

      // Default
      '*actions': 'defaultAction'
    },
    dontPanic: function() {
      console.log("Be calm!");
    },
    getArticles: function() {
      var articleListView = new ArticleListView();
      articleListView.render();
    },
    defaultAction: function(actions) {
      //console.log("No route: ", actions);
      var welcomeView = new WelcomeView();
    }
  });

  var initialize = function(){
    var app_router = new AppRouter;
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});
