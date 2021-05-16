import { DOMSelectors } from "./DOM";
import { genres } from "./genre";

const key = "e0f5ea7719664f64b7a9b7dfcf251380";

const query = async function () {
  try {
    const result = await fetch(
      " https://www.bungie.net/Platform/Destiny2/0/Profile/28007537/Item/{itemInstanceId}/.gte=8&api_key=${key}"
    );
    const data = await Response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
    alert("something went wrong");
  }
};
query();
