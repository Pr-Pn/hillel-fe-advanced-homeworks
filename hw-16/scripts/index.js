function Slider(_img, _sliderWrapper) {
    this.sliderWrapper = document.querySelector(_sliderWrapper);
    this.currentImg = this.sliderWrapper.querySelector('.img');
    this.nextSlideBtn = this.sliderWrapper.querySelector(".next-btn");
    this.prevSlideBtn = this.sliderWrapper.querySelector(".prev-btn");
    this.slideIndex = 0;
    this.nextSlide = (event) => {
        this.slideIndex++;
        this.updateImage();
        this.updateButtons();
    };
    this.prevSlide = (event) => {
        this.slideIndex--;
        this.updateImage();
        this.updateButtons();
    };
    this.updateImage = () => {
        this.currentImg.setAttribute("src", _img[this.slideIndex]);
    }
    this.updateButtons = () => {
        if (this.slideIndex < _img.length - 1) {
            this.nextSlideBtn.removeAttribute("disabled");
        } else {
            this.nextSlideBtn.setAttribute("disabled", "disabled");
        }
        if (this.slideIndex > 0) {
            this.prevSlideBtn.removeAttribute("disabled");
        } else {
            this.prevSlideBtn.setAttribute("disabled", "disabled");
        }
    }
    this.init = () => {
        this.updateImage();
        this.updateButtons();
        this.nextSlideBtn.onclick = this.nextSlide;
        this.prevSlideBtn.onclick = this.prevSlide;
    }
}

const images = [
    "./img/1.jpg",
    "./img/2.jpg",
    "./img/3.jpg",
    "./img/4.jpg"
];

const images2 = images.slice(1);

const slider = new Slider(images, ".slider-1");
slider.init();

new Slider(images2, '.slider-2').init();