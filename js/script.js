const addItemBtn = document.querySelector('.add-item-btn');
const userInput = document.querySelector('#item');
const shoppingList = document.querySelector('.shopping-list');

let input;
let removeBtn;
let listText;

// Create delete button for added items.
const createButton = () => {
  button = document.createElement('button');
  button.textContent = 'Remove';
  return button;
};

// Create span with text content of item
const createSpan = () => {
  span = document.createElement('span');
  span.textContent = '- ' + item;
  return span;
};

// create list and add span and delete button.
const createList = () => {
  const list = document.createElement('li');
  removeBtn = createButton();
  listText = createSpan();

  list.appendChild(listText);
  list.appendChild(removeBtn);
  return list;
};

// Add user input to a new created list, and append to shopping list.
const addToList = function () {
  const listItem = createList();
  shoppingList.appendChild(listItem);
  reset();

  // Click remove button to delete listItem form list.
  removeBtn.addEventListener('click', () => {
    listItem.remove();
  });
};

// Reset.
const reset = function () {
  userInput.value = '';
};

const init = function () {
  // Get item from input.
  userInput.addEventListener('input', (e) => {
    item = e.target.value;
    return item;
  });

  // Add item to list.
  addItemBtn.addEventListener('click', addToList);
};

// initialize programm.
init();
