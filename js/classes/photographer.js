class Photographer {

    constructor(data) {
        this.name = data.name;
        this.id = data.id;
        this.city = data.city;
        this.country = data.country;
        this.tags = data.tags;
        this.tagline = data.tagline;
        this.price = data.price;
        this.portrait = data.portrait;
    }

    displayTags() {
        let html = '';
        for (let tag of this.tags) {
            html += `<span class="itemTag">#${tag} </span>`;
        }
        return html;
    }

    render() {
    return `<a href="#" class="photographer">
            <img class="portrait" src="../../../images/Sample-Photos/Photographers-ID-Photos/${this.portrait}">
            <h1>${this.name}</h1>
            <p>${this.city}, ${this.country}</p>
            <p>${this.tagline}</p>
            <p>${this.price}</p>
            <p>${this.displayTags()}</p>
            </div>`;
    }
}

export default Photographer;