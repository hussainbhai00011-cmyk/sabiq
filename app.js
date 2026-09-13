const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const todoList = document.getElementById('todoList');
const addTaskBtn = document.getElementById('addTaskBtn');
const statusText = document.getElementById('statusText');

function updateStatus(message) {
  statusText.textContent = message;
}

addTaskBtn.addEventListener('click', () => {
  taskInput.focus();
});

taskForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const taskText = taskInput.value.trim();
  if (!taskText) {
    updateStatus('Enter a task first');
    return;
  }

  const item = document.createElement('li');
  item.className = 'todo-item';

  item.innerHTML = `
    <input type="checkbox" class="todo-check" />
    <span class="todo-text">${taskText}</span>
  `;

  todoList.appendChild(item);
  taskForm.reset();
  updateStatus('Task added');
});
