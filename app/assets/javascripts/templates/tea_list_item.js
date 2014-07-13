if (!window.TD)  {
  var TD = {};
}

if (!TD.templates) {
  TD.templates = {};
}

TD.templates.teaListItem = function () {
  var tmplString = [
        '<li>',
          '<h2><%= name %></h2>',
          '<p>Type: <%= type %></p>',
        '</li>',
      ].join('');

  return _.template(tmplString);
};
