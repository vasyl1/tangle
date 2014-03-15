'use strict';
 
app.factory('Post', function ($resource) {
  return $resource('https://glaring-fire-3204.firebaseio.com/posts/:id.json');
});