import Photographer from "../classes/Photographer.js";
import MediaList from "../classes/MediaList.js";

const urlParams = new URLSearchParams(window.location.search);
const photographerId = urlParams.get('id');


 fetch('../datas.json').then((response) => response.json())
.then(data => {
    const photographer = data.photographers.find(({ id }) => {
        return photographerId === id.toString();
    });
    let profile = new Photographer(photographer);
    profile.displayProfile();

    let list = new MediaList(profile);
    list.build(data);
    list.display();
    list.listen();

    document.getElementById('buttonPopularity').addEventListener('click', () => {
        console.log(this.all.sort((a, b) => b.likes - a.likes));
        // console.log(list.all);
    });
});