class MediaList {

    constructor()
    {
         this.all = [];
    }

    add(media)
    {
        this.all.push(media);
    }

    display()
    {
        let html = "";
        this.all.forEach(media => {
            media.render();
        });
        document.getElementById('allMedias').innerhtml = html;
    }

}

export default MediaList;