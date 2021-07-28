class Media {

    constructor(data)
    {
         this.id = data.id;
         this.photographerId = data.photographerId;
         this.title = data.title;
         this.image = data.image;
         this.video = data.video;
         this.tags = data.tags;
         this.likes = data.likes;
         this.date = data.date;
         this.price = data.price;
         this.photographerName = "";
    }

    // render()
    // {
    //     if (this.image) {
    //         this.renderImage();
    //     }
    //     if (this.video) {
    //         this.renderVideo();
    //     }
    // }

    render()
    {
        return `<div class="mediaImageItem">
        <a href="#" class="mediaWrapper">
        <img  class="mediaImage" src="../../images/Sample-Photos/${this.photographerName}/${this.image}">
        <div class="mediaInfos">
            <p class="mediaTitle">${this.title}</p></a>
            <dic class="mediaLikes">${this.likes}</dic>
        </div>
    </div>`;
    }

    // renderVideo()
    // {
    //     return `<div class="mediaVideoItem">
    //     <a href="#" class="mediaWrapper">
    //     <video controls class="mediaVideo">
    //         <source src="../../images/Sample-Photos/${this.photographerName}/${this.video}">
    //     </video>
    //     <div class="mediaInfos">
    //         <p class="mediaTitle">${this.title}</p></a>
    //         <dic class="mediaLikes">${this.likes}</dic>
    //     </div>
    // </div>`;
    // }

}

export default Media;