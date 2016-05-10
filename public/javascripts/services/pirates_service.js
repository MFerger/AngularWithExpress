app.factory('PiratesService', function ($http) {
  return {
    all: function() {
      return $http.get('/api/pirates');
    },
    create: function(pirate) {
      console.log(pirate);
      return $http.post('/api/pirates', pirate);
    }
  }
})
