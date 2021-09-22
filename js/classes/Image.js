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
        <div class="mediaWrapper">
        <img class="media" src="../../images/Sample-Photos/${this.photographerName}/${this.image}">
        </div>
        <div class="mediaInfos">
            <p class="mediaTitle">${this.title}</p>
            <div class="likes">
                <div class="mediaLikes" data-media-id="${this.id}">${this.likes}</div>
                <button class="likeButton" data-id="${this.id}"><i class="fas fa-heart"></i></button>
            </div>
        </div>
    </div>`;
    }


    renderSlider()
    {
        return `<img class="mediaSlider" src="../../images/Sample-Photos/${this.photographerName}/${this.image}">
    <p class="mediaTitleSlider">${this.title}</p>`;
    }
}

export default Image;