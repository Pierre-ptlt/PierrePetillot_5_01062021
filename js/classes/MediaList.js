import MediaFactory from "./MediaFactory.js";

class MediaList {

    constructor(photographer)
    {
         this.all = [];
         this.photographer = photographer;
         this.factory = new MediaFactory();
         this.totalLikes = 0;
    }

    countTotalLikes()
    {
        this.all.forEach(media => {
            this.totalLikes += media.likes;
        });
        return this.totalLikes;
    }

    build(data)
    {
        data.media.forEach(item =>
            {
                if (item.photographerId.toString() == this.photographer.id)
                {
                     let media = this.factory.build(item, this.photographer.name);
                     this.all.push(media);
                }
            });
            window.setTimeout(() => {
                this.countTotalLikes();
                this.displayTotalLikes();
            }, 500);
    }

    display()
    {
        let html = "";
        this.all.forEach(media => {
            html += media.render();
        });
        document.getElementById('allMedias').innerHTML = html;
    }

    displayTotalLikes()
    {
        document.getElementById('totalLikes').innerHTML = this.totalLikes + `<i class="fas fa-heart" id="totalHeart"></i>`;
        document.getElementById('totalPrice').innerHTML = `<p class="price">${this.photographer.price}€/jour</p>`;
    }

    listenForFilter()
    {
        document.getElementById('buttonPopularity').addEventListener('click',() => {
            console.log(this.all.sort((a, b) => b.likes - a.likes));
        });
    }

    listenForLike()
    {
        this.all.forEach(media => {
            let likeButton = document.querySelector(`[data-id="${media.id}"]`);
            if (likeButton)
            {
                likeButton.addEventListener('click', () => {
                    media.toggle();
                    if(!media.isLiked)
                    {
                        this.totalLikes--;
                    }
                    else
                    {
                        this.totalLikes++;
                    }
                    this.displayTotalLikes();
                });
            }
        });
    }
}

export default MediaList;