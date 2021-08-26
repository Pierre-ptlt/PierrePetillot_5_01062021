class Video {

    constructor(data, photographer)
    {
        this.id = data.id;
        this.photographerId = data.photographerId;
        this.title = data.title;
        this.src = data.video;
        this.tags = data.tags;
        this.likes = data.likes;
        this.date = data.date;
        this.price = data.price;
        this.photographerName = photographer.name;
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
                <div class="mediaLikes">${this.likes}</div>
                <button class="likeButton"><i class="fas fa-heart"></i></button>
            </div>
        </div>
    </div>`;
    }

    toggle()
    {
        let likeButton = document.querySelector(`[data-id="${this.id}"]`);
        console.log(likeButton, 'video');
    }
}

export default Video;