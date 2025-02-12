const images = [
    "logo-1.svg",
    "LOGOLATAM.svg",
    "logo-2.svg",
    "LOGOHABBIBS.png",
    "logo-3.svg",
    "LOGOMCX.png",
    "logo-4.svg",
    "shek-logotipo-quadrado.png",
    "logo-5.svg"
];

const imageFolder = "IMG/Clientes/";
const carousel = document.querySelector(".carousel");

let currentIndex = 0;
const imagesPerView = 5;


function loadImages() {
    images.forEach(img => {
        let imageElement = document.createElement("img");
        imageElement.src = imageFolder + img;
        carousel.appendChild(imageElement);
    });
}


function updateCarousel() {
    const offset = -(currentIndex * (100 / imagesPerView)) + "%";
    carousel.style.transform = `translateX(${offset})`;
}


function nextSlide() {
    if (currentIndex < images.length - imagesPerView) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateCarousel();
}


function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = images.length - imagesPerView;
    }
    updateCarousel();
}


setInterval(nextSlide, 3000);


loadImages();
updateCarousel();


let popupShown = false;
        
        document.addEventListener("mouseleave", function (event) {
            if (event.clientY <= 0 && !popupShown) {
                document.getElementById("popup").style.display = "block";
                popupShown = true;
            }
        });

        function closePopup() {
            document.getElementById("popup").style.display = "none";
        }
