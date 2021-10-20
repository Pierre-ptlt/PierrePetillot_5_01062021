import List from "./classes/List.js";

fetch("../datas.json").then(data => data.json())
.then(data => {
    const urlParams = new URLSearchParams(window.location.search);
    const urlTag = urlParams.get("tag");

    let list = new List();

    list.build(data.photographers);
    list.display(list.all );
    list.collectTags();
    list.displayTags();
    list.listenForFiltering();
    if (urlTag)
    {
        list.addUrlTag(urlTag);
    }
});
