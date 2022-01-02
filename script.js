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
const dropDownBtn = document.getElementById('drop-down-btn');

// const downBtn = document.getElementById('down-btn');




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
  cardInsideDiv.appendChild(titleTag).className = 'book-title';
  const authorTag = document.createElement('p');
  cardInsideDiv.appendChild(authorTag).className = 'author-title';

  

 


  const deleteBtn = document.createElement('button');


  cardInsideDiv.appendChild(deleteBtn).className = 'far fa-times-circle delete-btn';
  const readEl = document.createElement('button');
  cardInsideDiv.appendChild(readEl).className = 'read-btn';
  
  deleteBtn.addEventListener('click', removeBtn);
  function removeBtn() {


    cardDiv.style.display = 'none';
  }


  if (checkBox.checked) {
    readEl.textContent = 'Read'
    readEl.classList.add('read');
  } else {
    readEl.textContent = 'Not Read'
    readEl.classList.add('not-read');
  }

  readEl.addEventListener('click', function () {
      if (readEl.textContent === 'Read') {
        readEl.classList.remove('read');
        readEl.classList.add('not-read');
        readEl.textContent = 'Not Read';
      } else {
        readEl.classList.add('read');
        readEl.classList.remove('not-read');
        readEl.textContent = 'Read'
      }
  });





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



// Arrow drop down

dropDownBtn.addEventListener('click', (e) => {


      if (dropDownBtn.classList.contains('drop-down-btn-anim')) {
        dropDownBtn.classList.remove('drop-down-btn-anim');
        dropDownBtn.classList.add('down-btn-anim');
        // dropDownBtn.classList.remove('down-btn-anim');
        
        
      
        addBookBtn.classList.remove('add-btn-anim-down');
        addBookBtn.classList.add('add-btn-anim-up');


      



        
        // dropDownBtn.style.animation = 'arrowDownBtnAnim .5s forwards'
        
    
      } else if (dropDownBtn.classList.contains('down-btn-anim')) {
        dropDownBtn.classList.remove('down-btn-anim');
        dropDownBtn.classList.add('drop-down-btn-anim');
        addBookBtn.classList.remove('add-btn-anim-up');
        addBookBtn.classList.add('add-btn-anim-down');
        
      }
      
      
      
      else {
        // dropDownBtn.style.animation = 'arrowUpBtnAnim .5s forwards'
        
        addBookBtn.classList.add('add-btn-anim-down');
        dropDownBtn.classList.add('drop-down-btn-anim');
        // dropDownBtn.classList.remove('drop-down-anim');
        

      }

     

      
});















function modalOpen () {
  let modalContainer = document.getElementById('modalContainer')
  modalContainer.classList.add('visible');
}

function closeModal(e) {
  e.preventDefault();
  modalForm.reset();
  let modalContainer = document.getElementById('modalContainer')
  modalContainer.classList.remove('visible');
}

addBookBtn.addEventListener('click', modalOpen);
cancelBtn.addEventListener('click', closeModal);










