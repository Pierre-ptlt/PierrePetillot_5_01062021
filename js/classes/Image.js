import Media from "./Media.js";

class Image extends Media {

    constructor(data, photographerName)
    {
        super(data, photographerName);
        this.image = data.image;
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
                <div class="mediaLikes" data-media-id="${this.id}">${this.likes}</div>
                <button class="likeButton" data-id="${this.id}"><i class="fas fa-heart"></i></button>
            </div>
        </div>
    </div>`;
    }
}

export default Image;