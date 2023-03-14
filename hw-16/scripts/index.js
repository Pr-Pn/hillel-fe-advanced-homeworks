function Slider(_img, _sliderWrapper) {
    this.sliderWrapper = document.querySelector(_sliderWrapper);
    this.currentImg = null;
    this.nextSlideBtn = null;
    this.prevSlideBtn = null;
    this.slideIndex = 0;
    this.nextSlide = () => {
        this.slideIndex++;
        this.updateImage();
        this.updateButtons();
    };
    this.prevSlide = () => {
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
        if (this.sliderWrapper == null) {
            console.log("Wrong slider selector:", _sliderWrapper);
            return;
        }
        this.initElements();
        this.updateImage();
        this.updateButtons();
    }
    this.initElements = () => {
        this.sliderWrapper.insertAdjacentHTML('beforeend', this.createTemplate());
        this.currentImg = this.sliderWrapper.querySelector('.img');
        this.nextSlideBtn = this.sliderWrapper.querySelector(".next-btn");
        this.prevSlideBtn = this.sliderWrapper.querySelector(".prev-btn");
        this.nextSlideBtn.addEventListener('click', this.nextSlide);
        this.prevSlideBtn.addEventListener('click', this.prevSlide);
    }
    this.createTemplate = () => {
        return `
            <div class="slider-list">
                <img class="img" src="" alt="">
            </div>
            <button class="arrow prev-btn" type="button"></button>
            <button class="arrow next-btn" type="button"></button>
        `
    }
}

const images = [
    "./img/1.jpg",
    "./img/2.jpg",
    "./img/3.jpg",
    "./img/4.jpg"
];

const slider = new Slider(images, ".slider-1");
slider.init();

new Slider(images, ".slider-2").init();
