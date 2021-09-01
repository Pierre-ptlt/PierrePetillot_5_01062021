class Media {

    constructor(data, photographerName)
    {
        this.id = data.id;
        this.photographerId = data.photographerId;
        this.title = data.title;
        this.tags = data.tags;
        this.likes = data.likes;
        this.date = data.date;
        this.price = data.price;
        this.photographerName = photographerName;
        this.isLiked = false;
    }

    toggle()
    {
        if (!this.isLiked)
        {
            this.likes++;
        }
        else
        {
            this.likes--;
        }

        this.isLiked = ! this.isLiked;
        this.updateLikeCount();
    }

    updateLikeCount()
    {
        let el = document.querySelector(`[data-media-id="${this.id}"]`);
        el.innerHTML = this.likes;
    }
}

export default Media;