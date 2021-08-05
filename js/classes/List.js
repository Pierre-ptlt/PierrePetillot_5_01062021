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
  }

  listenForFiltering() {
    const tagButtons = document.querySelectorAll('.tag');
    tagButtons.forEach((tagButton) => {

        tagButton.addEventListener('click', () => {

          let tagName = tagButton.getAttribute('data-tag-id');


            if (!this.tagsSelected.has(tagName)) {
                tagButton.style.color = "white";
                tagButton.style.background = "#901C1C";
                this.tagsSelected.add(tagName);

            }
            else {
                tagButton.style.background = "white";
                tagButton.style.color = "#901C1C";
                this.tagsSelected.delete(tagName);
            }
            let filtered = this.filter();
            if (this.tagsSelected.size == 0) {
              filtered = this.all;
            }
            this.display(filtered);
        });
    });
  }

  addUrlTag()
  {
  //   const tagButtons = document.querySelectorAll('.tag');
  //   tagButtons.forEach(tagButton => {

  //       let tagName = tagButton.getAttribute('data-tag-id');
  //       if (tag == tagName)
  //       {
  //         tagButton.style.color = "white";
  //         tagButton.style.background = "#901C1C";
  //         this.tagsSelected.add(tagName);
  //       }
  //   });
  console.log('blabla');
  }

  filter() {
    return this.all.filter(photographer => {
      let hasTag = false;
      this.tagsSelected.forEach(tag => {
        if (photographer.hasTags(tag))
        {
          hasTag = true;
        }
      });
      return hasTag;
    });
}
}

export default List;