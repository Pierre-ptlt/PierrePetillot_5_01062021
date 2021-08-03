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

    displayProfile()
    {
        document.getElementById('photographerInfos').innerHTML = this.renderProfile();
    }

    displayTags() {
        let html = '';
        for (let tag of this.tags) {
            html += `<span class="itemTag">#${tag} </span>`;
        }
        return html;
    }

    hasTags(tag) {
        if (this.tags.includes(tag)) {
            return true;
        }
        else {
            return false;
        }
    }

    render() {
    return `<div class="photographer">
                <a href="photographer.html?id=${this.id}" class="portraitWrapper">
                <img  class="portrait" src="../../images/Sample-Photos/Photographers-ID-Photos/${this.portrait}">
                <h1 class="photographerName">${this.name}</h1></a>
                <div class="photographerDescription">
                    <p class="basement">${this.city}, ${this.country}</p>
                    <p class="slogan">${this.tagline}</p>
                    <p class="price">${this.price}€/jour</p>
                </div>
                <p class="photographerTags">${this.displayTags()}</p>
            </div>`;
    }

    renderProfile() {
        return `<div class="profile">
                    <a href="photographer.html?id=${this.id}" class="portraitWrapperProfile">
                    <div class="photographerDescriptionProfile">
                        <div class="profileNameWrapper">
                            <h1 class="photographerNameProfile">${this.name}</h1></a>
                            <button class="contactMe">Contactez-moi</button>
                        </div>
                        <p class="basement">${this.city}, ${this.country}</p>
                        <p class="slogan">${this.tagline}</p>
                        <p class="price">${this.price}€/jour</p>
                        <p class="photographerTagsProfile">${this.displayTags()}</p>
                    </div>
                    <img  class="portraitProfile" src="../../images/Sample-Photos/Photographers-ID-Photos/${this.portrait}">
                </div>`;
        }
}

export default Photographer;