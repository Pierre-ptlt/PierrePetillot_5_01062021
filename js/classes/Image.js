class Image {

    constructor(data, photographer)
    {
        this.id = data.id;
        this.photographerId = data.photographerId;
        this.title = data.title;
        this.image = data.image;
        this.image = data.image;
        this.tags = data.tags;
        this.likes = data.likes;
        this.date = data.date;
        this.price = data.price;
        this.photographerName = photographer.name;
        this.liked = false;
    }

    render()
    {
        return `<div class="mediaItem">
        <a href="#" class="mediaWrapper">
        <img class="media" src="../../images/Sample-Photos/${this.photographerName}/${this.image}">
        </a>
        <div class="mediaInfos">
            <p class="mediaTitle">${this.title}</p>
            <div class="likes">
                <div class="mediaLikes">${this.likes}</div>
                <button class="likeButton" data-id="${this.id}"><i class="fas fa-heart"></i></button>
            </div>
        </div>
    </div>`;
    }

    toggle()
    {
        if (!this.liked)
        {
            this.likes++;
            this.liked = true;
        }
        else if (this.liked)
        {
            this.likes = this.likes - 1;
            this.liked = false;
        }
        console.log(this.liked, this.likes);
    }
}

export default Image;