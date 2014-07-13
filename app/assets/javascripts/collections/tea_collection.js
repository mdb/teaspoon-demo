if (!window.TD)  {
  var TD = {};
}

if (!window.TD.collections)  {
  TD.collections = {};
}

TD.collections.Tea = Backbone.Collection.extend({
  model: TD.models.Tea
});
