import MediaFactory from "./MediaFactory.js";

class MediaList {

    constructor(photographer)
    {
         this.all = [];
         this.photographer = photographer;
         this.factory = new MediaFactory();
    }

    build(data)
    {
        data.media.forEach(item =>
            {
                if (item.photographerId.toString() == this.photographer.id)
                {
                     let media = this.factory.build(item, this.photographer);
                     this.all.push(media);
                }
            });
    }

    display()
    {
        let html = "";
        this.all.forEach(media => {
            html += media.render();
        });
        document.getElementById('allMedias').innerHTML = html;
    }

    listen()
    {
        this.all.forEach(media => {
            let likeButton = document.querySelector(`[data-id="${media.id}"]`);
            likeButton.addEventListener('click', () => {
                media.toggle();
            });
        });
    }
}

export default MediaList;