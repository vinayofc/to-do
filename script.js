const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskContainer = document.getElementById('task-container');

taskForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const taskText = taskInput.value.trim();
  if (taskText === '') {
    return;
  }

  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
        <p>${taskText}</p>
        <div class="text-right">
            <button class="btn btn-danger">Delete</button>
        </div>
    `;

  taskContainer.appendChild(card);

  taskInput.value = '';
});

taskContainer.addEventListener('click', function(event) {
  const target = event.target;
  if (target.tagName === 'BUTTON') {
    const card = target.closest('.card');
    card.remove();
  }
});
