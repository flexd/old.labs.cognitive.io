//Filename: boilerplate.js

define([

], function(){
  // Above we have passed in jQuery, Underscore and Backbone
  // They will not be accessible in the global scope

  var ArticleModel = Backbone.Model.extend({
    urlRoot: '/api/article',
  
  });
  return ArticleModel;
  // What we return here will be used by other modules
});
