PA.Views.Bio = Backbone.View.extend({

  template: JST["bio"],

  render: function () {

    this.$el = $("<section></section>")
    this.$el.html(this.template);

    return this;
  }
})