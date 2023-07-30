var slider = document.getElementById('myRange');
var container = document.getElementById('slidercontainer');
var red = document.getElementById('red');
var blue = document.getElementById('blue');

function chahgeSlider() {
    if(parseInt(slider.value)>50){
        container.style.backgroundColor='white';
        // container.style.alignItems = 'normal';
        red.style.position = 'absolute';
        blue.style.position = 'absolute';
        red.style.left = '0px';
        blue.style.right = '0px';
        blue.style.bottom = '0px';
    }
    if(parseInt(slider.value)==50){
        container.style.backgroundColor='darkgrey';
        container.style.alignItems = 'center';
        red.style.position = 'static';
        blue.style.position = 'static';
    }
    if(parseInt(slider.value)<50){
        container.style.backgroundColor='black';
        // container.style.alignItems = 'center';
        red.style.position = 'absolute';
        blue.style.position = 'absolute';
        red.style.right = '0px';
        blue.style.left = '0px';
        blue.style.bottom = '0px';
    }
}
