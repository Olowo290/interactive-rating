const Rates = document.querySelectorAll('article p');
const btn = document.querySelector('input');
const container = document.querySelector('section');
const article = document.querySelector('article');

Rates.forEach((rate, i) => {
  const before = Rates[i - 1];
  if (i !== 0) {
    rate.addEventListener('mouseover', () => {
      before.classList.add('hovered-before');
    });
    rate.addEventListener('mouseout', () => {
      before.classList.remove('hovered-before');
    });
  }
});
let selectedRate;
article.addEventListener('click', e => {
  if (e.target.classList.contains('rating')) {
    Rates.forEach((rate, i) => {
      rate.classList.remove('active');
      if (i < e.target.id) {
        Rates[i].classList.add('active');
      }
    });
    selectedRate = e.target.textContent;
    console.log(selectedRate);
  }
});

btn.addEventListener('click', () => {
  setTimeout(() => {
    container.classList.add('thankyou');
    container.innerHTML = `
        <img
          src="./images/illustration-thank-you.svg"
          alt="illustration-thank-you"
          class="illustrator"
        />
        <p class="what-you-selected">You selected ${selectedRate} out of 5</p>
        <h3>Thank you!</h3>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p> `;
  }, 2000);
});
