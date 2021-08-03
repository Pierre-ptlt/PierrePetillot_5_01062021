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
    }

    render()
    {
        return `<div class="mediaVideoItem">
        <a href="#" class="mediaWrapper">
        <video controls class="mediaVideo">
            <source src="../../images/Sample-Photos/${this.photographerName}/${this.image}">
        </video>
        <div class="mediaInfos">
            <p class="mediaTitle">${this.title}</p></a>
            <dic class="mediaLikes">${this.likes}</dic>
        </div>
    </div>`;
    }
}

export default Image;