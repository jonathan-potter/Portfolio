PA.Routers.PortfolioRouter = Backbone.Router.extend({

  routes: {
    "": "rootIndex",
    "bio": "rootIndex",
    "projects": "projectsIndex"
  },

  rootIndex: function () {
    var bio = new PA.Views.Bio({});
    $("#main").html(bio.render().$el);
  },

  projectsIndex: function () {
    console.log("projects")
    var projectsIndex = new PA.Views.Projects({});
    $("#main").html(projectsIndex.render().$el);
  }

});