/*const logoTrack = document.querySelector(".logo-track");
const logos = Array.from(logoTrack.children);
logos.forEach((logo) => {
    const clone = logo.cloneNode(true);
    logoTrack.appendChild(clone);
});*/

$(document).ready(function () {
   $(".logo-track").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        speed: 800,
        arrows: false,
        dots: false,
        infinite: true,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 360,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});

const cards = document.querySelectorAll(".testimonial-card");
const stars = document.querySelectorAll(".star");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let currentIndex = 0;
const totalCards = cards.length;
function updateSlider() {
    cards.forEach((card, index) => {
        let position = index - currentIndex;
        if (position < -2) {
            position += totalCards;
        }
        if (position > 2) {
            position -= totalCards;
        }
        const move = position * 102;
        card.style.transform = `translateX(${move}%)`;
        if (position < -1 || position > 1) {
            card.style.opacity = "0";
        } else {
            card.style.opacity = "1";
        }
    });
    updateStars();
}
function updateStars() {
    stars.forEach((star, index) => {
        star.classList.remove("active");
        if (index === currentIndex) {
            star.classList.add("active");
        }
    });
}
function nextSlide() {
    currentIndex++;
    if (currentIndex >= totalCards) {
        currentIndex = 0;
    }
    updateSlider();
}
function previousSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = totalCards - 1;
    }
    updateSlider();
}
nextBtn.addEventListener("click", function () {
    nextSlide();
    resetAutoSlider();
});
prevBtn.addEventListener("click", function () {
    previousSlide();
    resetAutoSlider();
});
stars.forEach((star, index) => {
    star.addEventListener("click", function () {
        currentIndex = index;
        updateSlider();
        resetAutoSlider();
    });
});
let autoSlider = setInterval(function () {
    nextSlide();
}, 3000);
function resetAutoSlider() {
    clearInterval(autoSlider);
    autoSlider = setInterval(function () {
        nextSlide();
    }, 3000);
}
updateSlider();