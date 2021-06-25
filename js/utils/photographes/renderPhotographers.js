import getAllPhotographers from "./getAllPhotographes";

const photographerList = getAllPhotographers();

const renderPhotographers = (tag) => {
    return photographerList.map(({ name, portrait, tags, tagline, city, country, price }) => (
        `<div class="photographer">
        <img class="portrait" src="../../../images/Sample Photos/Photographers ID Photos/${portrait}">
        <h1>${name}</h1>
        <p>${city}, ${country}</p>
        <p>${tagline}</p>
        <p>${price}</p>
        <p>#${tags}</p>
        </div>`
        )
    );
};

export default renderPhotographers;


