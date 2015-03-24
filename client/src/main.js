var App = Ember.Application.create({
  ApplicationAdapter: DS.FixtureAdapter
});

App.ApplicationRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('concept');
  }
});

App.Concept = DS.Model.extend({
  preferredLabel: DS.attr('string'),
  frequency: DS.attr(),
  path: DS.attr()
});

App.Concept.reopenClass({
  FIXTURES: [{
    id: 1,
    preferredLabel: 'Java',
    frequency: 52,
    path: [{
      preferredLabel: 'Software development'
    }, {
      preferredLabel: 'Programming languages'
    }]
  }, {
    id: 2,
    preferredLabel: 'JavaScript',
    frequency: 42,
    path: [{
      preferredLabel: 'Software development'
    }, {
      preferredLabel: 'Programming languages'
    }]
  }, {
    id: 3,
    preferredLabel: 'Java',
    frequency: 2,
    path: [{
      preferredLabel: 'Geography'
    }]
  }, {
    id: 4,
    preferredLabel: 'Java',
    frequency: 1,
    path: [{
      preferredLabel: 'Food and beverages'
    }, {
      preferredLabel: 'Hot beverages'
    }, {
      preferredLabel: 'Coffee'
    }]
  }, {
    id: 5,
    preferredLabel: 'Java',
    frequency: 1,
    path: [{
      preferredLabel: 'Dancing style'
    }]
  }]
});
