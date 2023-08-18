const URL = "https://uselessfacts.jsph.pl/api/v2/facts/random";

let btn = document.querySelector("button");
let fact = document.querySelector(".fact");

btn.addEventListener("click", async () => {
  let randomFact = await getFact();
  fact.textContent = randomFact;
});

async function getFact() {
  let response = await fetch(URL);
  let data = await response.json();
  return data.text;
}
