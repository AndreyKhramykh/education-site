let sciencesMenu = document.querySelector("#sciencesMenu");
let levelsMenu = document.querySelector("#levelsMenu");
let courseContent = document.querySelector(".course__content");
let searchField = document.querySelector("#search-field");
let searchButton = document.querySelector(".search-button");
let acceptButton = document.querySelector(".accept-button");
let cards = document.querySelectorAll(".course__card");

acceptButton.addEventListener("click", () => {
  let scienceValue = sciencesMenu.value;
  let levelValue = levelsMenu.value;
  searchField.value = "";

  cards.forEach((card) => {
    card.classList.remove("course__card_hidden");

    if (!card.classList.contains(scienceValue)) {
      card.classList.add("course__card_hidden");
    }
    if (!card.classList.contains(levelValue)) {
      card.classList.add("course__card_hidden");
    }
  });
});

searchButton.addEventListener("click", () => {
  let value = searchField.value.trim().toLowerCase();
  if (value != "") {
    cards.forEach((card) => {
      card.classList.remove("course__card_hidden");
      if (card.innerText.toLowerCase().search(value) == -1) {
        card.classList.add("course__card_hidden");
      }
    });
  } else {
    cards.forEach((card) => {
      card.classList.remove("course__card_hidden");
    });
  }
});
