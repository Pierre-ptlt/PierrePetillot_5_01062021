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
    profile.listenForContact();

    let list = new MediaList(profile);
    list.build(data);
    list.display(list.all);
    list.listen();
    list.listenForLike();
});