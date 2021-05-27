import { DOMSelectors } from "./DOM";
import { genres } from "./genre";
const key = "2oslZGi4GkzHKexsxM0XXFrn7FZ9uRkY649";
const listen = function () {
  DOMSelectors.searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    DOMSelectors.grid.innerHTML = "";
    const searchParams = DOMSelectors.searchArea.value;

    const searchQuery = async function () {
      try {
        const response = await fetch(
          "https://www.worldcoinindex.com/apiservice/v2getmarkets?key=2oslZGi4GkzHKexsxM0XXFrn7FZ9uRkY649&fiat=btc "
        );
        const data = await response.json();
        console.log(data.Markets);
        data.Markets.forEach((Coin) => {
          DOMSelectors.grid.insertAdjacentHTML(
            "beforeend",
            `<section class="currency-name">
          <div class="price-to-USD">
           <div class="price-to-Bitcoin">
         
           </div>
             <h3 class="currenecy-name"> ${Coin.Name} </h3>
               <p class="price-to-USD">${Coin.Price}</p>
               <p class="Price-to-Bitcoin">${Coin.Volume_24h}</p>
           </div>
         </div> 
       </section>`
          );
          console.log(Coin.Name);
        });
      } catch (error) {
        console.log(error);
        alert("something went wrong");
      }
    };
    searchQuery();
  });
};

listen();
