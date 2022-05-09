const container = document.querySelector('.container');

async function fetchCards() {
    const response = await fetch('https://fakestoreapi.com/products');
    const result = await response.json();
    drawCards(result);
    console.log(result)
}

function drawCards(cards = []) {
    let resultHtml = '';
    cards.forEach((card) => {
        resultHtml += `
      <div class="card">
      <img class="card__image" src=${card.image}>
      <div class="card__text">
      <span class="card__text-title">${card.title}</span>
      <span class="card__text-price">${card.price}$</span>
      </div>
      </div>`;
    });
    container.innerHTML = resultHtml;
}

fetchCards();


const buttonSubmit = document.querySelector(".form__button_submit");

const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
})

buttonSubmit.addEventListener('click', (event) => {
    const inputName = document.getElementById('input-1');
    const inputEmail = document.getElementById('input-2');
    const checkbox = document.getElementById('input-5');
    const inputNameWarning = document.querySelector('.form__warning-name');
    const inputEmailWarning = document.querySelector('.form__warning-email');
    const inputIncorrectEmailWarning = document.querySelector('.form__warning-incorrectemail');
    const inputCheckboxWarning = document.querySelector('.form__warning-checkbox');


    if (!inputName.value) {
        inputNameWarning.style.display = 'inline-block';
        inputName.classList.add('form__warning_border');
    } else {
        inputNameWarning.style.display = 'none';
        inputName.classList.remove('form__warning_border');
    }

    if (!inputEmail.value || !inputEmail.value.includes('@')) {
        if (inputEmail.value && !inputEmail.value.includes('@')) {
            inputEmailWarning.style.display = 'none';
            inputIncorrectEmailWarning.style.display = 'inline-block';
        } else {
            inputIncorrectEmailWarning.style.display = 'none';
            inputEmailWarning.style.display = 'inline-block';
        }
        inputEmail.classList.add('form__warning_border');
    } else {
        inputIncorrectEmailWarning.style.display = 'none';
        inputEmailWarning.style.display = 'none';
        inputEmail.classList.remove('form__warning_border');
    }

    if (!checkbox.checked) {
        inputCheckboxWarning.style.display = 'inline-block';
    } else inputCheckboxWarning.style.display = 'none';
})

