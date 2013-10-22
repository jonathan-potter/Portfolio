window.PA = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new PA.Routers.PortfolioRouter();
    Backbone.history.start();
  }
};

$(document).ready(function(){
  PA.initialize();
});
