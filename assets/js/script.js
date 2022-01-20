var formEl = document.querySelector("#task-form"); 
var tasksToDoEl = document.querySelector("#tasks-to-do"); 

var taskFormHandler = function(event) { 

  event.preventDefault();
  //adds the task name
  var taskNameInput = document.querySelector("input[name='task-name']").value;
  //adds task type to the task name
  var taskTypeInput = document.querySelector("select[name='task-type']").value;

  // package up data as an object 
  var taskDataObj = {
    name: taskNameInput,
    type: taskTypeInput
  };
  //send it as an argument to createTaskEl
  createTaskEl(taskDataObj);
}; 

  //task list function
var createTaskEl = function(taskDataObj) {
  //create item list
  var listItemEl = document.createElement("li"); 
  listItemEl.className = "task-item";

  //creat dive to hold task info and add to list item
  var taskInfoEl = document.createElement("div");
  //git it as class name 
  taskInfoEl.className = "task-info";
  //add html content to div
  taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "<h3><span class='task-type'>" + taskDataObj.type + "</span>";
  
  listItemEl.appendChild(taskInfoEl);

  // add entire list item to list
  tasksToDoEl.appendChild(listItemEl);
};
formEl.addEventListener("submit", taskFormHandler);