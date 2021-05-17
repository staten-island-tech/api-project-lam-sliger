import { DOMSelectors } from "./DOM";

const key = "2oslZGi4GkzHKexsxM0XXFrn7FZ9uRkY649";

const query = async function () {
  try {
    const response = await fetch(
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
         <h3 class="currenecy-name"> ${ma} </h3>
           <p class="price-to-USD">$45,561</p>
           <p class="Price-to-Bitcoin">1 bitcoin</p>
       </div>
     </div> 
   </section>`)
    });  
  } catch (error) {
    console.log(error);
    alert("something went wrong");
  }
};
query();
