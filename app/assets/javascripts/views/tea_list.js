if (!window.TD)  {
  var TD = {};
}

if (!window.TD.views)  {
  TD.views = {};
}

TD.views.TeaList = Backbone.View.extend({
  render: function () {
    var self = this;

    _.each(this.collection.models, function (model) {
      self.$el.append(new TD.views.TeaListItem({
        model: model
      }).render());
    });
  }
});
