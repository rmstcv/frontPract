function telMask () {
    let element = document.getElementById('mask');
    let maskOptions = {
    mask: '+{7} ( 0 0 0 ) 0 0 0 - 0 0 - 0 0',
    lazy: false
    };
    let mask = IMask(element, maskOptions);
}

export default telMask;