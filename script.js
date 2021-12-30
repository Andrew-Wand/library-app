const addBookBtn = document.getElementById('addBtn');
const cancelBtn = document.getElementById('cancelBtn');
const modalAddBtn = document.getElementById('modalAddBtn');
const titleInput = document.getElementById('titleInput');
const authorInput = document.getElementById('authorInput');
const cardsContainer = document.getElementById('card-container');
const removeBtn = document.getElementById('removeBtn');
const singleCard = document.getElementById('singleCard');
const checkBox = document.getElementById('haveRead');
const modalForm = document.getElementById('modalForm');



// Book constructor
function Book(title, author) {
  this.title = title
  this.author = author
}


let myLibrary = [];


const form = document.querySelector('form');


form.addEventListener('submit', (event) => {
  event.preventDefault();

  let modalContainer = document.getElementById('modalContainer')
  modalContainer.classList.remove('visible');

  const title = event.target.title.value;
  const author = event.target.author.value;
  

  let book = new Book(title, author);
  myLibrary.push(book);

  const cardDiv = document.createElement('div');
  cardsContainer.appendChild(cardDiv).className = 'card-div';
  const cardInsideDiv = document.createElement('div');
  cardDiv.appendChild(cardInsideDiv).className = 'card-inside-div';
  const titleTag = document.createElement('h2');
  cardInsideDiv.appendChild(titleTag);
  const authorTag = document.createElement('p');
  cardInsideDiv.appendChild(authorTag);

  const deleteBtn = document.createElement('button');
  cardInsideDiv.appendChild(deleteBtn).className = 'delete-btn';
  deleteBtn.textContent = 'Remove';

  
  
  
  
  
  deleteBtn.addEventListener('click', removeBtn);
  function removeBtn() {
    cardDiv.style.display = 'none';
  }


  


  function displayCard(array) {
        
    for(let x in array) {
        if(x === 'title') {
            titleTag.textContent = (array[x]);
        }
        else if (x === 'author') {
            authorTag.textContent = (array[x]);
        }
    }
}

displayCard(book);
modalForm.reset();

});



function modalOpen() {
  let modalContainer = document.getElementById('modalContainer')
  modalContainer.classList.add('visible');
}

function closeModal() {
  let modalContainer = document.getElementById('modalContainer')
  modalContainer.classList.remove('visible');
}

addBookBtn.addEventListener('click', modalOpen);
cancelBtn.addEventListener('click', closeModal);