//Filename: boilerplate.js

define([
  'models/article'
], function(ArticleModel){
  //  we have passed in jQuery, Underscore and Backbone in app.js
  // They will not be accessible in the global scope
  
  var Articles = Backbone.Collection.extend({
    model: ArticleModel,
    url: '/api/article'
  });
  return Articles;
  // What we return here will be used by other modules
});
