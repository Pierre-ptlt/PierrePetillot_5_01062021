import Media from "./Media.js";

class Image extends Media {

    constructor(data, photographerName)
    {
        super(data, photographerName);
        this.image = data.image;
    }

    render()
    {
        return `<div class="mediaItem" media-id="${this.id}">
        <div class="mediaWrapper" id="mediaWrapper" wrapper-id="${this.id}">
        <img tabindex="0" class="media" alt="${this.title}, closeup view" src="../../images/Sample-Photos/${this.photographerName}/${this.image}">
        </div>
        <div class="mediaInfos">
            <p class="mediaTitle">${this.title}</p>
            <div class="likes">
                <div class="mediaLikes" data-media-id="${this.id}">${this.likes}</div>
                <button aria-label="likes" class="likeButton" data-id="${this.id}"><span class="fas fa-heart"></span></button>
            </div>
        </div>
    </div>`;
    }


    renderSlider()
    {
        return `<img class="mediaSlider" alt="${this.title}" src="../../images/Sample-Photos/${this.photographerName}/${this.image}">
    <p class="mediaTitleSlider basement">${this.title}</p>`;
    }
}

export default Image;