import Media from "./Media.js";

class Video extends Media {

    constructor(data, photographerName)
    {
        super(data, photographerName);
        this.src = data.video;
    }

    render()
    {
        return `<div class="mediaItem" media-id="${this.id}">
        <a href="#" class="mediaWrapper">
        <video controls class="media">
            <source src="../../images/Sample-Photos/${this.photographerName}/${this.src}">
        </video>
        </a>
        <div class="mediaInfos">
            <p class="mediaTitle">${this.title}</p>
            <div class="likes">
                <div class="mediaLikes" data-media-id=${this.id}>${this.likes}</div>
                <button class="likeButton" data-id="${this.id}"><i class="fas fa-heart"></i></button>
            </div>
        </div>
    </div>`;
    }
}

export default Video;