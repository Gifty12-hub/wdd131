const input = document.querySelector('#favchap');

const button = document.querySelector('button');

const list = document.querySelector('........'); // you need to fill in the blank to reference the HTML element that is a unodered list element.

const li = document.createElement('li');

const deleteButton = document.createElement('button');

li.textContent = input.value;

deleteButton.textContent = 'X';
li.append(deleteButton);
list.append(li);

button.addEventListener('click', function() {
    // Code to execute when the button is clicked
  });

  if (input.value.trim() !== '') {  }
  deleteButton.addEventListener('click', function () {
    list.removeChild(li);
    input.focus();
  });
  input.value = '';
  input.focus();    