PA.Views.Bio = Backbone.View.extend({

  template: JST["root_index"],

  render: function () {

    this.$el = $("<section></section>")
    this.$el.html(this.template);

    return this;
  }
})