let index = 0;

function showSlide(){
    const slides = document.querySelector('.slides');
    slides.style.transform = `translateX(${-index * 100}%)`;
}

function nextSlide(){
    index++;
    if(index > 2){
        index = 0;
    }
    showSlide();
}

function prevSlide(){
    index--;
    if(index < 0){
        index = 2;
    }
    showSlide();
}