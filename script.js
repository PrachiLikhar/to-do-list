document.addEventListener('DOMContentLoaded', function() {
  const taskInput = document.getElementById('task');
  const addButton = document.getElementById('add');
  const taskList = document.getElementById('taskList');

  addButton.addEventListener('click', function() {
      const taskText = taskInput.value.trim();

      if (taskText !== '') {
          const li = document.createElement('li');
          li.innerHTML = `${taskText} <button class="delete">Delete</button>`;
          taskList.appendChild(li);

          taskInput.value = '';

          const deleteButton = li.querySelector('.delete');
          deleteButton.addEventListener('click', function() {
              taskList.removeChild(li);
          });
      }
  });
});
