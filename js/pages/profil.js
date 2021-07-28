import Photographer from "../classes/Photographer.js";
import MediaList from "../classes/MediaList.js";
import Media from "../classes/Media.js";

const urlParams = new URLSearchParams(window.location.search);
const photographerId = urlParams.get('id');


 fetch('../datas.json').then((response) => response.json())
.then(data => {
    const photographer = data.photographers.find(({ id }) => {
        return photographerId === id.toString();
    });
    let profile = new Photographer(photographer);
    document.getElementById('photographerInfos').innerHTML = profile.renderProfile();

    let list = new MediaList();
    data.media.forEach(item =>
        {
            if (item.photographerId.toString() === photographerId)
            {
                 let media = new Media(item);
                 media.photographerName = profile.name;
                 list.add(media);
                 media.render();
            }
        });
});