//step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}

 // JavaScript for Modal Functionality
 const readMoreBtn = document.getElementById('read-more-btn');
 const modal = document.getElementById('custom-modal');
 const modalOverlay = document.getElementById('modal-overlay');
 const closeBtn = document.getElementById('close-btn');
 const mainContent = document.getElementById('main-content');

 // Show modal and blur background
 readMoreBtn.addEventListener('click', () => {
   modal.classList.add('show');
   modalOverlay.classList.add('show');
   mainContent.classList.add('blur-background');
 });

 // Close modal and remove blur
 closeBtn.addEventListener('click', () => {
   modal.classList.remove('show');
   modalOverlay.classList.remove('show');
   mainContent.classList.remove('blur-background');
 });

 // Close modal when clicking outside
 modalOverlay.addEventListener('click', () => {
   modal.classList.remove('show');
   modalOverlay.classList.remove('show');
   mainContent.classList.remove('blur-background');
 });