//declaring the parent and child divs
const canvas = document.querySelector('#canvas');
const returnPixels = () => {return pixels = document.querySelectorAll('.pixel')};   //this function updates pixels value

//function to add child divs
const insertPixels = n => {
    returnPixels();
    pixels.forEach(pix => pix.remove()) ;
    let parentSize = parseFloat(getComputedStyle(canvas).height);   //finds parent height
    for(let i = 0;i < n*n; i++) {
        const pixel = document.createElement('div');
        let divSize = parentSize / n;
        pixel.setAttribute('style', `height= ${divSize}px; width: ${divSize}px;`);  //sets child height
        pixel.classList.add('pixel');
        canvas.appendChild(pixel);
    };
    colorChange();
};

//adding eventlisteners on buttons ~ No more need of this code
/*
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => insertPixels(button.id));
});
*/

//adding eventlisteners to child divs
const colorChange = () => {
    returnPixels();
    pixels.forEach(pixel => {
        let attr = pixel.getAttribute('style'); //finds already existing style values
        pixel.addEventListener('mouseover', () => pixel.setAttribute('style', `${attr} background-color: red;`));
    });
};

//pixell input
let pixelInput = () => {
    const input = document.querySelector('input');
    insertPixels(input.value);
};