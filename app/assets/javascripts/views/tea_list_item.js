if (!window.TD)  {
  var TD = {};
}

if (!window.TD.views)  {
  TD.views = {};
}

TD.views.TeaListItem = Backbone.View.extend({
  template: TD.templates.teaListItem(),

  render: function () {
    return this.template({
      name: this.model.get('name'),
      type: this.model.get('type')
    });
  }
});
