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
        <div class="mediaWrapper" class="mediaWrapper" wrapper-id="${this.id}">
        <video tabindex="0" controls class="media" aria-label="${this.name}">
            <source src="../../images/Sample-Photos/${this.photographerName}/${this.src}">
        </video>
        </div>
        <div class="mediaInfos">
            <p class="mediaTitle">${this.title}</p>
            <div class="likes">
                <div class="mediaLikes" data-media-id=${this.id}>${this.likes}</div>
                <button class="likeButton" alt="likes" data-id="${this.id}"><span class="fas fa-heart"></span></button>
            </div>
        </div>
    </div>`;
    }

    renderSlider()
    {
        return `<video aria-label="${this.name}" controls class="mediaSlider">
        <source src="../../images/Sample-Photos/${this.photographerName}/${this.src}">
    </video>
    <p class="mediaTitleSlider basement">${this.title}</p>`;
    }
}

export default Video;