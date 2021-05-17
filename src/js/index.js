import { DOMSelectors } from "./DOM";

const key = "2oslZGi4GkzHKexsxM0XXFrn7FZ9uRkY649";

const query = async function () {
  try {
    const response = await fetch(
      "https://www.worldcoinindex.com/apiservice/ticker?2oslZGi4GkzHKexsxM0XXFrn7FZ9uRkY649&label=ethbtc-ltcbtc&fiat=btc"
    );
    const data = await response.json();
    data.Markets.forEach((coin) => {
      console.log(Markets);
      DOMSelectors.grid.insertAdjacentHTML(
        "beforeend",
        `
      </div>
      <h3 class="currenecy-name">${Name}</h3>
        <p class="price-to-USD">${Price}}</p>
        <p class="Price-to-Bitcoin">${Volume_24h}</p>
    </div>`
      );
      console.log(Markets);
    });
  } catch (error) {
    //console.log(error);
    alert("something went wrong");
  }
};
query();
