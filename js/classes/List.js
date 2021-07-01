import Photographer from "./Photographer";

class List {
  constructor() {
    this.all = [];
    this.filtered = new Set();
    this.tags = new Set();
    this.checked = false;
  }

  build(items) {
    items.forEach((item) => {
      this.all.push(new Photographer(item));
    });
  }

  display(photographers) {
    let html = "";
    photographers.forEach((photographer) => {
      html += photographer.render();
    });
    document.getElementById("photographesIndex").innerHTML = html;
  }

  collectTags() {
    this.all.forEach((photographer) => {
      photographer.tags.forEach((tag) => {
        this.tags.add(tag);
      });
    });
    console.log(this.tags);
  }

  displayTags() {

    for (let tag of this.tags) {
      tag.charAt(0).toUpperCase();
      document.getElementById(
        "tags"
      ).innerHTML += `<button class="tag">#${tag} </button>`;
    }

    const tagButtons = document.querySelectorAll('.tag');
    tagButtons.forEach((tagButton) => {
        let boolButton = false;
        tagButton.addEventListener('click', () => {
            if (!boolButton) {
                boolButton = true;
                tagButton.style.color = "white";
                tagButton.style.background = "#901C1C";
                this.filtered.add(tagButton.innerHTML);

            }
            else {
                boolButton = false;
                tagButton.style.background = "white";
                tagButton.style.color = "#901C1C";
                this.filtered.delete(tagButton.innerHTML);
            }
            this.checkFiltered();
        });
    });
  }

  checkFiltered() {
    if (this.filtered.size > 0) {
        this.checked = true;
    }
    else {
        this.checked = false;
    }
  }
}

export default List;
