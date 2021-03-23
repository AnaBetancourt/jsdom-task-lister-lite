const form = document.querySelector("form")
const taskList = document.getElementById("tasks")
  
document.addEventListener("DOMContentLoaded", () => {

  form.addEventListener("submit", handleSubmit);
});

function handleSubmit(event){
  event.preventDefault()
  const newTask = document.getElementById("new-task-description").value
  taskList.innerHTML += `<li>${newTask}</li>`
}