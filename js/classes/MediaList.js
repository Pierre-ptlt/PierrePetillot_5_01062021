import MediaFactory from "./MediaFactory.js";

class MediaList {

    constructor(photographer)
    {
         this.all = [];
         this.photographer = photographer;
         this.factory = new MediaFactory();
         this.totalLikes = 0;
         this.currentSlideIndex = 0;
    }

    countTotalLikes()
    {
        this.all.forEach(media => {
            this.totalLikes += media.likes;
        });
        return this.totalLikes;
    }

    build(data)
    {
        data.media.forEach(item =>
            {
                if (item.photographerId.toString() == this.photographer.id)
                {
                     let media = this.factory.build(item, this.photographer.name);
                     this.all.push(media);
                }
            });
            window.setTimeout(() => {
                this.countTotalLikes();
                this.displayTotalLikes();
            }, 500);
    }

    display()
    {
        let html = "";
        this.all.forEach(media => {
            html += media.render();
        });
        document.getElementById('allMedias').innerHTML = html;
        this.listen();
    }

    listen()
    {
        this.listenForFilter();
        this.listenForLike();
        this.listenForSlider();
        this.listenForSort();
    }

    displayTotalLikes()
    {
        document.getElementById('totalLikes').innerHTML = this.totalLikes + `<i class="fas fa-heart" id="totalHeart"></i>`;
        document.getElementById('totalPrice').innerHTML = `<p class="price">${this.photographer.price}€/jour</p>`;
    }

    listenForFilter()
    {
        document.getElementById('buttonPopularity').addEventListener('click',() => {
            this.all = (this.all.sort((a, b) => b.likes - a.likes));
            this.display();
            document.getElementById('currentSort').innerHTML = 'Popularité <i class="fas fa-chevron-up">';
        });

        document.getElementById('buttonDate').addEventListener('click',() => {
            this.all = (this.all.sort((a, b) => {
                let dateA = new Date(a.date).getTime(), dateB = new Date(b.date).getTime();
                return dateA - dateB;
            }));
            this.display();
            document.getElementById('currentSort').innerHTML = 'Date <i class="fas fa-chevron-up">';
        });

        document.getElementById('buttonTitle').addEventListener('click',() => {
            this.all = (this.all.sort((a, b) => {
                let titleA = a.title.toLowerCase(), titleB = b.title.toLowerCase();
                if (titleA < titleB) return -1;
                if (titleA > titleB) return 1;
                return 0;
            }
            ));
            this.display();
            document.getElementById('currentSort').innerHTML = 'Titre <i class="fas fa-chevron-up">';
        });
    }

    listenForLike()
    {
        this.all.forEach(media => {
            let likeButton = document.querySelector(`[data-id="${media.id}"]`);
            if (likeButton)
            {
                likeButton.addEventListener('click', () => {
                    media.toggle();
                    if(!media.isLiked)
                    {
                        this.totalLikes--;
                    }
                    else
                    {
                        this.totalLikes++;
                    }
                    this.displayTotalLikes();
                });
            }
        });
    }

    listenForSort()
    {
        let menuDefault = document.getElementById('currentSort');
        let deroulant = document.getElementById('deroulant');
        let sortButtons = document.querySelectorAll('.triButton');

        if(menuDefault)
        {
            menuDefault.addEventListener('click', () => {
                menuDefault.style.display = "none";
                deroulant.style.display = "flex";
            });
        }

        sortButtons.forEach(button => {
            button.addEventListener('click', () => {
                menuDefault.style.display = "flex";
                deroulant.style.display = "none";
            });
        });

    }

    listenSliderChange()
    {
        document.getElementById("sliderPrevious").addEventListener('click', () => {
            this.sliderPrevious();
        });

        document.getElementById("sliderNext").addEventListener('click', () => {
            this.sliderNext();
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === "ArrowRight")
            {
                this.sliderNext();
            }
        }, true);

        document.addEventListener('keydown', (e) => {
            if (e.key === "ArrowLeft")
            {
                this.sliderPrevious();
            }
        }, true);
    }

    sliderPrevious()
    {
        if (this.currentSlideIndex == 0)
        {
            this.currentSlideIndex = this.all.length;
        }
        this.currentSlideIndex--;
        document.getElementById("mediaSliderWrapper").innerHTML = this.all[this.currentSlideIndex].renderSlider();
    }

    sliderNext()
    {
        if (this.currentSlideIndex == this.all.length -1)
        {
            this.currentSlideIndex = 0;
            document.getElementById("mediaSliderWrapper").innerHTML = this.all[this.currentSlideIndex].renderSlider();
        }
        else
        {
            this.currentSlideIndex++;
            document.getElementById("mediaSliderWrapper").innerHTML = this.all[this.currentSlideIndex].renderSlider();
        }
    }

    listenForSlider()
    {
        this.all.forEach(media => {
            document.querySelector(`[wrapper-id="${media.id}"]`).addEventListener('click', () => {
                this.currentSlideIndex = this.all.findIndex(item => item.id === media.id);
                document.querySelector(".slider").style.display = "flex";
                document.getElementById("mediaSliderWrapper").innerHTML = media.renderSlider();
            });
        });

        this.all.forEach(media => {
            document.querySelector(`[wrapper-id="${media.id}"]`).addEventListener("keydown", (e) => {
                if (e.key === "Enter")
                {
                    this.currentSlideIndex = this.all.findIndex(item => item.id === media.id);
                    document.querySelector(".slider").style.display = "flex";
                    document.getElementById("mediaSliderWrapper").innerHTML = media.renderSlider();
                }
            }, true);
        });

        document.getElementById("closeSlider").addEventListener('click', () => {
            this.closeSlider();
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === "Escape")
            {
                this.closeSlider();
            }
        });
    }

    closeSlider()
    {
        document.querySelector(".slider").style.display = "none";
    }
}

export default MediaList;