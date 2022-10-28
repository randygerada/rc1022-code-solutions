/* exported todos */

var todos = [];
var previousTodosJSON = localStorage.getItem('javascript-local-storage');

window.addEventListener('beforeunload', event => {
  event.preventDefault();
  var todosJSON = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', todosJSON);
});

todos = JSON.parse(previousTodosJSON);
