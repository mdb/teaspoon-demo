describe("TD.views.TeaList", function () {
  beforeEach(function () {
    this.testContainer = $('<ul class="teas"></ul>');

    this.view = new TD.views.TeaList({
      el: this.testContainer,
      collection: new TD.collections.Tea([{
          name: 'Some Tea',
          type: 'Some Type'
        }, {
          name: 'Some Second Tea',
          type: 'Some Second Type'
      }])
    });
  });

  it("is a Backbone view", function () {
    expect(this.view instanceof Backbone.View).toEqual(true);
  });

  describe("#render", function () {
    beforeEach(function () {
      this.view.render();
    });

    it("renders a list item and appends it to the 'el' for each tea model in its collection", function () {
      expect(this.view.$('li').length).toEqual(2);
    });

    describe("each list item it renders", function () {
      beforeEach(function () {
        this.listItem = this.view.$('li')[0];
      });

      it("displays the tea's name", function () {
        expect($(this.listItem).find('h2').text()).toEqual('Some Tea');
      });

      it("displays the tea's type", function () {
        expect($(this.listItem).find('p').text()).toEqual('Type: Some Type');
      });
    });
  });
});
