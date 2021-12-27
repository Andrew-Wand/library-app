const addBookBtn = document.getElementById('addBtn');
const cancelBtn = document.getElementById('cancelBtn');
const modalAddBtn = document.getElementById('modalAddBtn');
const titleInput = document.getElementById('titleInput');
const authorInput = document.getElementById('authorInput');
const cardsContainer = document.getElementById('card-container');

let userTitleInput = titleInput.value;
let userAuthorInput = authorInput.value;


let myLibrary = [];


function addBookToLibrary() {
    const titleName = titleInput.value;
    const authorName = authorInput.value;

    if (titleName.trim() && authorName.trim()) {
        const newCard = {
            titleName,
            authorName
        };
        createCard(newCard);

        titleInput.value = '';
        authorInput.value = '';
        closeModal();

    }
}

function createCard(data, index) {
    const card = document.createElement('div');
    card.classList.add('card');

    if (index === 0) {
        card.classList.add('active');
    }

    card.innerHTML = `
  <div class="book-card">
    <p>
      ${data.titleName}
    </p>
    <p>
    ${data.authorName}
    </p>
  </div>
</div>
  `;

  myLibrary.push(card);

  cardsContainer.appendChild(card);
}







function modalOpen() {
    let modalContainer = document.getElementById('modalContainer')
    modalContainer.classList.add('visible');
}

function closeModal() {
    let modalContainer = document.getElementById('modalContainer')
    modalContainer.classList.remove('visible');
}




modalAddBtn.addEventListener('click', addBookToLibrary);
addBookBtn.addEventListener('click', modalOpen);
cancelBtn.addEventListener('click', closeModal);