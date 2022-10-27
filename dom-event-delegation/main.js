/* Here we're using the querySelector to target task-list class of Ul.
   One addEventListener for all of the children of the task-list class. */

var $taskList = document.querySelector('.task-list');

$taskList.addEventListener('click', handleClickList);

/* this fuction is being defined and within the function we're logging the
   event.target which is the html line of code.
   also targeting the tagName which shows you which element it is (span, li, btn)
   */

function handleClickList(event) {
  console.log('event.target: ', event.target);
  console.log('event.target.tagName: ', event.target.tagName);

  if (event.target.tagName !== 'BUTTON') {
    return;
  }

  var taskListItem = event.target.closest('.task-list-item');
  console.log('event.target.closest: ', taskListItem);
  taskListItem.remove();
}
