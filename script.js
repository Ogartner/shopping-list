const itemForm = document.querySelector('#item-form');
const itemInput = document.querySelector('#item-input');
const itemList = document.querySelector('#item-list');

const createButton = function (classes) {
  const button = document.createElement('button');
  button.className = classes;
  return button;
};

const createIcon = function (classes) {
  const icon = document.createElement('i');
  icon.className = classes;
  return icon;
};

const addItem = (e) => {
  e.preventDefault();
  const newItem = itemInput.value;

  if (newItem.value === '') {
    alert('Please add an item!');
    return;
  }

  const li = document.createElement('li');
  li.appendChild(document.createTextNode(newItem));

  const button = createButton('remove-item btn-link text-red');
  const icon = createIcon('fa-solid fa-xmark');

  li.appendChild(button);
  button.appendChild(icon);

  itemList.appendChild(li);
  itemInput.value = '';
};

// Event Listener
itemForm.addEventListener('submit', addItem);
