//declaring the parent div
const canvas = document.querySelector('#canvas');
console.log(canvas);

//function to add child divs
const insertPixels = n => {
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach(pix => pix.remove()) 
    let parentSize = parseFloat(getComputedStyle(canvas).height);   //set parent height
    for(let i = 0;i < n*n; i++) {
        const pixel = document.createElement('div');
        let divSize = parentSize / n;
        pixel.setAttribute('style', `height= ${divSize}px; width: ${divSize}px;`);
        pixel.classList.add('pixel');
        canvas.appendChild(pixel);
    };
};

//adding eventlisteners on buttons
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => insertPixels(button.id));
});
