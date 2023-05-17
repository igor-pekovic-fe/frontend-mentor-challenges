// Selecting required elements
const idEl = document.querySelector(".advice-card__id");
const adviceEl = document.querySelector(".advice-card__advice");
const dividerEl = document.querySelector(".advice-card__divider");
const dice = document.querySelector(".advice-card__dice");

// Helper function for rendering HTML
const renderHTML = function (el, markup) {
  el.insertAdjacentHTML("afterbegin", markup);
};

// Advice api url
const ADVICE_URL = "https://api.adviceslip.com/advice";

const generateAdvice = async function () {
  try {
    // Fetch and parse data
    const res = await fetch(`${ADVICE_URL}`);
    const data = await res.json();
    console.log(data);
    // HTML markups
    const markupId = `<p>advice #<span class="id">${data.slip.id}</span></p>`;
    const markupAdvice = `<q>${data.slip.advice}</q>`;
    const markupDivider = `<img src="./assets/images/pattern-divider-mobile.svg"
     alt="mobile divider" />`;
    // Rendering markups using helper class
    renderHTML(idEl, markupId);
    renderHTML(adviceEl, markupAdvice);
    renderHTML(dividerEl, markupDivider);
  } catch (err) {
    throw new Error(err);
  }
};

// Render HTML on button click
dice.addEventListener("click", function () {
  // Clear HTML element text before rendering new text
  idEl.textContent = adviceEl.textContent = dividerEl.textContent = "";
  generateAdvice();
});
