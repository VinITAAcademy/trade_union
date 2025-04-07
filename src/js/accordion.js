/* -------accordion start----------------------------------------------- */
document.querySelectorAll(".accordion-header").forEach((header) => {
    header.addEventListener("click", function () {
        const parent = this.parentElement;
        const content = parent.querySelector(".accordion-content");
        const isActive = parent.classList.contains("active");

        if (isActive) {
            content.style.maxHeight = null;
            parent.classList.remove("active", "open");
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            parent.classList.add("active", "open");
        }
    });
});
/* -------accordion end----------------------------------------------- */
/* -------swiper start----------------------------------------------- */
document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".team-slider", {
        slidesPerView: 2.5,
        centeredSlides: false,
        loop: true,
        navigation: {
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
        },
    });

    const slides = document.querySelectorAll(".swiper-slide");

    slides.forEach((slide) => {
        slide.addEventListener("click", () => {
            const realIndex = parseInt(slide.getAttribute("data-swiper-slide-index"));
            swiper.slideToLoop(realIndex); 
        });
    });

    function updateBlur() {
        swiper.slides.forEach((slide, index) => {
            if (index === swiper.activeIndex) {
                slide.classList.remove("blur");
            } else {
                slide.classList.add("blur");
            }
        });
    }

    swiper.on("slideChange", updateBlur);
    updateBlur();
});
/* -------swiper end----------------------------------------------- */
/* -------createElement start----------------------------------------------- */
document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".allNewsButton");
    const newsBlock = document.querySelector(".newsBlock");
    let newsIndex = 0; 
    const newsPerClick = 2; 
    let allNews = []; 

    button.addEventListener("click", function () {
        if (allNews.length === 0) {
            fetch("./src/data/news.json")
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Помилка завантаження JSON");
                    }
                    return response.json();
                })
                .then(data => {
                    allNews = data; 
                    showNews(); 
                })
                .catch(error => console.error(error));
        } else {
            showNews();
        }
    });

    function showNews() {
        const newsToShow = allNews.slice(newsIndex, newsIndex + newsPerClick);
        newsToShow.forEach(news => {
            const newsItem = document.createElement("div");
            newsItem.classList.add("newsSection", "col");
            newsItem.innerHTML = `
                <div class="newsCard">
                    <img class="newsImages" src="${news.image}" alt="${news.title}">
                    <div class="newsSubImage">
                        <h5 class="newsAlt">${news.title}</h5>
                        <a href="./news" class="newsButton button">Детальніше...</a>
                    </div>
                </div>
            `;
            newsBlock.appendChild(newsItem);
        });

        newsIndex += newsPerClick;

        if (newsIndex >= allNews.length) {
            button.style.display = "none";
        }
    }
});
/* -------createElement end----------------------------------------------- */

