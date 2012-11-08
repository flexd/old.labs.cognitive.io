//Filename: boilerplate.js

define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/articles/article.html',
  'moment'
], function($, _, Backbone, ArticleTemplate, moment){
  //  we have passed in jQuery, Underscore and Backbone in app.js
  // They will not be accessible in the global scope
  
  var ArticleItemView = Backbone.View.extend({
    tagName: "li",
    events: {
      "click a" : "clicked"
    },
    clicked: function(e){
        e.preventDefault();
        var id = this.model.get("id");
        Backbone.Router.navigate('article/', {id: id});
    },
    render: function () {
      $(this.el).html(_.template(ArticleTemplate, {article: this.model, _:_}));
    }
    });
    console.log("ArticleItemView is: ", ArticleItemView);
  return ArticleItemView;
  // What we return here will be used by other modules
});
