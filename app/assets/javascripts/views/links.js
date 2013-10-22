PA.Views.Links = Backbone.View.extend({

  template: JST["links"],

  render: function () {

    this.$el = $("<section></section>")
    this.$el.html(this.template);

    return this;
  }
})