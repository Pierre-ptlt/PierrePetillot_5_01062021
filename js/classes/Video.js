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
        <div class="mediaWrapper">
        <video controls class="media">
            <source src="../../images/Sample-Photos/${this.photographerName}/${this.src}">
        </video>
        </div>
        <div class="mediaInfos">
            <p class="mediaTitle">${this.title}</p>
            <div class="likes">
                <div class="mediaLikes" data-media-id=${this.id}>${this.likes}</div>
                <button class="likeButton" data-id="${this.id}"><i class="fas fa-heart"></i></button>
            </div>
        </div>
    </div>`;
    }

    renderSlider()
    {
        return `<video controls class="mediaSlider">
        <source src="../../images/Sample-Photos/${this.photographerName}/${this.src}">
    </video>
    <p class="mediaTitleSlider basement">${this.title}</p>`;
    }
}

export default Video;