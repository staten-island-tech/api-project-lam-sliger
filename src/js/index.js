import { DOMSelectors } from "./DOM";

const key = "2oslZGi4GkzHKexsxM0XXFrn7FZ9uRkY649";

const query = async function () {
  try {
    const response = await fetch(
      `https://www.worldcoinindex.com/apiservice/ticker?key=2oslZGi4GkzHKexsxM0XXFrn7FZ9uRkY649&label=ethbtc&fiat=btc`
    );
    const data = await response.json();
    console.log(data.Markets);
    data.Markets.foreach((Coin) => {
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
   </section>1`
      );
    });
    console.log(Coin);
  } catch (error) {
    console.log(error);
    alert("something went wrong");
  }
};
query();
