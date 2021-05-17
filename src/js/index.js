import { DOMSelectors } from "./DOM";

const key = "2oslZGi4GkzHKexsxM0XXFrn7FZ9uRkY649";

const query = async function () {
  try {
    const response = await fetch(
      "https://www.worldcoinindex.com/apiservice/json?key=2oslZGi4GkzHKexsxM0XXFrn7FZ9uRkY649"
    );
    const data = await response.json();
    data.results.forEach((coin) => {
      DOMSelectors.grid.insertAdjacentHTML("beforeend", "html");
    });
  } catch (error) {
    console.log(error);
    alert("something went wrong");
  }
};
query();
