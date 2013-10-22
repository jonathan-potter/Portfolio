PA.Views.Projects = Backbone.View.extend({

  template: JST["projects"],

  render: function () {

    this.$el = $("<section></section>")
    this.$el.html(this.template);

    return this;
  }
})