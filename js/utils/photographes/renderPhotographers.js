import Photographer from "../../classes/photographer";
import getAllPhotographers from "./getAllPhotographes";

const photographerList = getAllPhotographers();
const renderPhotographers = () => {
    return photographerList.map(({ name, portrait, tags, tagline, city, country, price }) => (
        `<div class="photographer">
        <img src="../../../images/Sample Photos/Photographers ID Photos/${portrait}">
        <h1>${name}</h1>
        <p>${city}, ${country}</p>
        </div>`
        )
    );
};
console.log(renderPhotographers);

// function render(photographe) {
//     return `<div class="photographer">
//     <h1>${photographe.name}</h1>
//     </div>`;
// }


export default renderPhotographers;


