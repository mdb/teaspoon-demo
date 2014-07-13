$(document).ready(function () {
  var teas = [{
          name: 'Jasmine',
          type: 'Black'
        }, {
          name: 'Chamomile',
          type: 'Herbal'
        }, {
          name: 'Peppermint',
          type: 'Herbal'
      }],
      view = new TD.views.TeaList({
        el: '.tea-list',
        collection: new TD.collections.Tea(teas)
      });

    view.render();
});
