class Slider {
 constructor (swiper) {
  this.swiper = new Swiper(swiper, {

    allowTouchMove: false,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });

  this.countSlider = document.querySelector(".slider__count span");
  this.totalSlider = document.querySelector(".slider__total span");
 }

 slideCounter () {
    this.countSlider.innerHTML = this.addPrefix(this.swiper.activeIndex + 1);
  };

  addPrefix (num) {
      if (num < 10) {
        num = '0' + num;
        return num;
      }
  }

  totalCount() {
    this.totalSlider.innerHTML =  this.addPrefix(this.swiper.slides.length);
  };

  swiperInit () {
     this.totalCount();
     this.swiper.on('slideChange', () => {
      this.slideCounter();
    });
  }  
}
  
export default Slider;

