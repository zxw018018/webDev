var command = prompt('What would you like to do?');
var list = [];
// when command is quit, quit the app
// when command is not quit, enter while loop
while (command !== 'quit') {
  // if command is new, add a todo to list
  if (command === 'new') {
    addTodos();

  }
  if (command === 'list') {
    listTodos();
    
  }
  if (command === 'delete'){
    deleteTodos();
  }
  command = prompt('what would you like to do?');
}
console.log('OK, you quit the app');


function listTodos(){
  console.log("******");
  list.forEach(function(todo,index){
    console.log(index+": "+todo);
  });
  console.log("******");

}

function addTodos(){
  var todo = prompt('enter a new todo');
  list.push(todo);
}

function deleteTodos(){
  var toDelete = prompt('Enter index of todo to delete');
  list.splice(toDelete, 1 );
}