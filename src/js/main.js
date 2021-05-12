import {nouisSlider} from "./modules/nouisSliderConfig";
import Slider from "./modules/slider";
import map from "./modules/map";
import modal from "./modules/modal";
import Form from './modules/form.js';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    
    nouisSlider();
    new Slider('.swiper-container').swiperInit();
    map();
    modal();
    new Form(".feed-form").initForm();

});