import Photographer from "./Photographer";

class List {
  constructor() {
    this.all = [];
    this.tagsSelected = new Set();
    this.tags = new Set();
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

  formatTags(tag) {
      let first = tag.charAt(0).toUpperCase();
      let others = tag.substr(1, tag.length);
      return first + others;
  }

  displayTags() {

    for (let tag of this.tags) {
      document.getElementById(
        "tags"
      ).innerHTML += `<button class="tag" data-tag-id="${tag}">#${this.formatTags(tag)} </button>`;
    }

    const tagButtons = document.querySelectorAll('.tag');
    tagButtons.forEach((tagButton) => {
        let boolButton = false;
        let tagName = tagButton.getAttribute('data-tag-id');
        tagButton.addEventListener('click', () => {
            if (!boolButton) {
                boolButton = true;
                tagButton.style.color = "white";
                tagButton.style.background = "#901C1C";
                this.tagsSelected.add(tagName);

            }
            else {
                boolButton = false;
                tagButton.style.background = "white";
                tagButton.style.color = "#901C1C";
                this.tagsSelected.delete(tagName);
            }
            this.displayFiltered();
        });
    });
  }

  displayFiltered() {
    let list = new Set();
    if (this.tagsSelected.size > 0) {
        this.all.forEach(photographer => {
            if (this.tagsSelected.includes(photographer.tags)) {
                list.add(photographer);
            }
        });
    }
    this.display(list);
}
}

export default List;