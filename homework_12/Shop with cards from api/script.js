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
      <span class="card__title">${card.title}</span>
      <span class="card__price">${card.price}</span>
      </div>
      </div>`;
    });
    container.innerHTML = resultHtml;
}

fetchCards();