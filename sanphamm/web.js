let currentImageIndex = 0;
let images = [
    "thung-48-hop-sua-tuoi-tiet-trung-it-duong-vinamilk-180ml-202307120941357128.webp",
    "thung-48-hop-sua-tuoi-tiet-trung-it-duong-vinamilk-180ml-202309190903596500.webp",
    "thung-48-hop-sua-tuoi-tiet-trung-it-duong-vinamilk-100-sua-tuoi-180ml-202310051142183828.webp",
    "thung-48-hop-sua-tuoi-tiet-trung-it-duong-vinamilk-100-sua-tuoi-180ml-202310051142177919.webp",
    "thung-48-hop-sua-tuoi-tiet-trung-it-duong-vinamilk-100-sua-tuoi-180ml-202310051142174759.webp",
    "thung-48-hop-sua-tuoi-tiet-trung-it-duong-vinamilk-100-sua-tuoi-180ml-202310051142171728.webp",
    "thung-48-hop-sua-tuoi-tiet-trung-it-duong-vinamilk-100-sua-tuoi-180ml-202310051142203177.webp"
    // thêm đường dẫn khác nếu có
];

function setImage(src) {
    let mainImage = document.getElementById('main-image');
    mainImage.src = src;
    currentImageIndex = images.indexOf(src);

    let thumbnails = document.querySelectorAll('.thumbnail-list img');
    thumbnails.forEach((thumbnail, index) => {
        if (index === currentImageIndex) {
            thumbnail.classList.add('active');
        } else {
            thumbnail.classList.remove('active');
        }
    });
}

function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    setImage(images[currentImageIndex]);
}

function scrollProducts(direction) {
    let container = document.querySelector('.product-list');
    let scrollAmount = 0;
    let slideTimer = setInterval(function(){
        if(direction > 0) {
            container.scrollLeft += 10;
        } else {
            container.scrollLeft -= 10;
        }
        scrollAmount += 10;
        if(scrollAmount >= 150){  // Giả sử mỗi sản phẩm có chiều rộng là 150px
            window.clearInterval(slideTimer);
        }
    }, 25);
}

//swiper
var swiper = new Swiper(".home-swiper", {
    spaceBetween: 30,
    centeredSlides: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  function toggleHeartIcon(event) {
    var clickedIcon = event.target;
    var heartIcon = clickedIcon.parentElement.getElementsByClassName('bx-heart')[0];
    var heartIconAlt = clickedIcon.parentElement.getElementsByClassName('bxs-heart')[0];
    
    if (heartIcon.style.display !== 'none') {
      heartIcon.style.display = 'none';
      heartIconAlt.style.display = 'block';
    } else {
      heartIcon.style.display = 'block';
      heartIconAlt.style.display = 'none';
    }
  }