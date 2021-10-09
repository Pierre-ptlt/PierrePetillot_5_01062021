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

    displayProfileTags() {
        let html = '';
        for (let tag of this.tags) {
            html += `<a href="index.html?tag=${tag}" class="itemTag">#${tag} </a>`;
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
                            <button class="contactMe" id="contactMe">Contactez-moi</button>
                        </div>
                        <p class="basement">${this.city}, ${this.country}</p>
                        <p class="slogan">${this.tagline}</p>
                        <p class="photographerTagsProfile">${this.displayProfileTags()}</p>
                    </div>
                    <img  class="portraitProfile" src="../../images/Sample-Photos/Photographers-ID-Photos/${this.portrait}">
                </div>`;
        }

        listenForContact()
        {
            const contactModal = document.getElementById('contactModal');
            const contactBtn = document.getElementById('contactMe');
            const closeBtn = document.getElementById('closeContact');
            const sendBtn = document.getElementById('sendForm');
            const formTitle = document.getElementById('contactTitle');
            const nom = document.getElementById("inputNom");
            const prenom = document.getElementById('inputPrenom');
            const mail = document.getElementById('inputMail');
            const message = document.getElementById('inputMessage');
            let title = formTitle.textContent;

            contactBtn.addEventListener('click', () => {
                formTitle.innerHTML =  title + `</br>` +this.name;
                contactModal.style.display = "block";
            });

            closeBtn.addEventListener('click', () => {
                contactModal.style.display = "none";
            });

            sendBtn.addEventListener('click', () => {
                console.log(prenom.value);
                console.log(nom.value);
                console.log(mail.value);
                console.log(message.value);
                contactModal.style.display = "none";
            });
        }
}

export default Photographer;