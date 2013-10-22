PA.Routers.PortfolioRouter = Backbone.Router.extend({

  routes: {
    "": "rootIndex",
    "/": "rootIndex"
  },

  rootIndex: function () {
    var indexView = new PA.Views.Index({});
    $("#main").html(indexView.render().$el);
  }

});