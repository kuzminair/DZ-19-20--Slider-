var slider = document.getElementById('myRange');
var container = document.getElementById('slidercontainer');
var red = document.getElementById('red');
var blue = document.getElementById('blue');

function chahgeSlider() {
    if(parseInt(slider.value)>128){
        container.style.backgroundColor=`rgb(${slider.value}, ${slider.value}, ${slider.value})`;
        red.style.position = 'absolute';
        blue.style.position = 'absolute';
        let redleft = (container.clientWidth*slider.value)/255-300;
        red.style.left = `${redleft}px`;
        let blueleft = (container.clientWidth*(255-slider.value))/255-55;
        blue.style.left = `${blueleft}px`;
    }
    if(parseInt(slider.value)==128){
        container.style.backgroundColor=`rgb(${slider.value}, ${slider.value}, ${slider.value})`;
        container.style.alignItems = 'center';
        red.style.position = 'static';
        blue.style.position = 'static';
    }
    if(parseInt(slider.value)<128){
        container.style.backgroundColor=`rgb(${slider.value}, ${slider.value}, ${slider.value})`;
        red.style.position = 'absolute';
        blue.style.position = 'absolute';
        let blueleft = (container.clientWidth*slider.value)/255-300;
        blue.style.left = `${blueleft}px`;        
        let redleft = (container.clientWidth*(255-slider.value))/255-55;
        red.style.left = `${redleft}px`;
    }
}
