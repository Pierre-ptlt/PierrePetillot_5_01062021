import renderPhotographers from "./utils/photographes/renderPhotographers.js";
import getAllTags from "./utils/tags/getAllTags.js";

document.getElementById('photographesIndex').innerHTML = renderPhotographers();
getAllTags();
