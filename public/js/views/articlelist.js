//Filename: boilerplate.js

define([
  'collections/articles',
  'moment',
  'views/article'
], function(ArticlesCollection, moment, ArticleItemView){
  //  we have passed in jQuery, Underscore and Backbone in app.js
  // They will not be accessible in the global scope
  
  var ArticleListView = Backbone.View.extend({
    tagName: 'ul',
    initialize: function() {
     _.bindAll(this, "renderArticle");
    },
    renderArticle: function (model) {
      var articleItemView = new ArticleItemView({model: model});
      articleItemView.render();
      $(this.el).append(articleItemView.el);
    },
    render: function () {

      var that = this;

      var articles = new ArticlesCollection();
      articles.fetch({
        success: function (articles) {
          //$(that.el).html(_.template(ArticlesListTemplate, {articles: articles.models, _:_}));
          console.log("Articles is: ", articles);
          articles.forEach(function(article) {
            that.renderArticle(article);
          });
        },
        error: function (model, xhr, options) {
          $('#error').html("<strong>Error fetching articles :(</strong>");
        }
      });
    }
    });
  return ArticleListView;
  // What we return here will be used by other modules
});
