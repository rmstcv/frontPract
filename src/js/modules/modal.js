import {minVal, maxVal} from './nouisSliderConfig';

let modalTrigger = document.querySelector(".modal__btn");

function modalContent () {
    let min = minVal();
    let max = maxVal();
    let coord = document.querySelector("[data-coords]").getAttribute("data-coords");
    coord = JSON.parse(coord);

    return (`
    <div class="modal__content">
        <h2>Поп-ап</h2>
        <h3>Выбранные значения:</h3>
        <p>Минимум: <span>${min} $</span></p>
        <p>Максимум: <span>${max} $</span></p>
        <h3>Выбранная метка:</h3>
        <p>Координаты: <span> ${coord.xActive}, ${coord.yActive}</span></p>
    </div>
    `);
};

function openModal () {
    $.fancybox.open(modalContent());
};

let modal = () => {
    modalTrigger.addEventListener('click', () => {
        openModal();
    });
};

export default modal;