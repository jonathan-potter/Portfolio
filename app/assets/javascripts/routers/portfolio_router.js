PA.Routers.PortfolioRouter = Backbone.Router.extend({

  routes: {
            "": "bio",
         "bio": "bio",
    "projects": "projects",
     "contact": "contact"
  },

  bio: function () {
    var bio = new PA.Views.Bio({});
    $("#main").html(bio.render().$el);
  },

  projects: function () {
    var projects = new PA.Views.Projects({});
    $("#main").html(projects.render().$el);
  },

  contact: function () {
    var links = new PA.Views.Links({});
    $("#main").html(links.render().$el);
  }

});