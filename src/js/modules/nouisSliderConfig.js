function nouisSlider () {
    let slider = document.getElementById('slider');
    let data = JSON.parse(slider.getAttribute("data-noislider"));
    
    noUiSlider.create(slider, {
        start: [data.start, data.end],
        tooltips: [{to: function (value) {return 'от ' + Math.round(value) + ' $';}}, 
        {to: function (value) {return 'до ' + Math.round(value) + ' $';}}],
        connect: true,
        range: {
            'min': data.min,
            'max': data.max
        },
                
    });
}

function minVal () {
    let min = Math.round(slider.noUiSlider.get()[0]);
    return (min);
    
} 

function maxVal () {
    let max = Math.round(slider.noUiSlider.get()[1]);
    return (max);
} 

export {nouisSlider};
export {minVal, maxVal};
