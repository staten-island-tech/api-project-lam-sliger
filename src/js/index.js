import { DOMSelectors } from "./DOM";

const key = "2oslZGi4GkzHKexsxM0XXFrn7FZ9uRkY649";

const query = async function () {
  try {
    const response = await fetch(
<<<<<<< HEAD
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
=======
      "https://www.worldcoinindex.com/apiservice/v2getmarkets?key=2oslZGi4GkzHKexsxM0XXFrn7FZ9uRkY649&fiat=btc "
    );
    const data = await response.json();
    console.log(data.Markets)
    data.Markets.forEach((Coin) => {
      DOMSelectors.grid.insertAdjacentHTML("beforeend", 
      `<section class="currency-name">
      <div class="price-to-USD">
       <div class="price-to-Bitcoin">
     
       </div>
         <h3 class="currenecy-name"> ${Coin.Name} </h3>
           <p class="price-to-USD">${Coin.Price}</p>
           <p class="Price-to-Bitcoin">${Coin.Volume_24h}</p>
       </div>
     </div> 
   </section>`)
   
    });  
>>>>>>> 7e60c54094bffae6cd3c1391ae1acac124ae6473
  } catch (error) {
    //console.log(error);
    alert("something went wrong");
  }
};
query();
