import getAllPhotographers from "./utils/photographes/getAllPhotographes.js";
import Photographer from "./classes/photographer.js";
import renderPhotographers from "./utils/photographes/renderPhotographers.js";

const test = getAllPhotographers();
console.log(test);

let photo = new Photographer();
photo = test[0];
console.log(photo);

document.getElementById('photographesIndex').innerHTML = renderPhotographers();