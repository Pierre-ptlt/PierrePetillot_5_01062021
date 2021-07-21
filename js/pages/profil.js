import Photographer from "../classes/Photographer.js";

const urlParams = new URLSearchParams(window.location.search);
const photographerId = urlParams.get('id');


 fetch('../datas.json').then((response) => response.json())
.then(data => {
    const photographer = data.photographers.find(({ id }) => {
        return photographerId === id.toString();
    });
    let profile = new Photographer(photographer);
    document.getElementById('photographerInfos').innerHTML = profile.render();
});
console.log('lidhfds');