const pixelArray = document.querySelectorAll(".item");
const wholePage = document.querySelector("html");
let mouseDownOrNot = false;


// There are two events to be listened: mousedown and mouseenter.
// When mouseenter happen AND when the mouse is held, change the class of pixel.
// One way to do this is to set up a Boolean, which, when mousedown happen, changed to true.
// When mouseenter happens AND the Boolean is true, change the class.
// When mouseup happens, change the Boolean to false to stop drawing when mouseenter.
pixelArray.forEach(pixel => {
    pixel.addEventListener('mousedown', () => {
        mouseDownOrNot = true;
    })
    pixel.addEventListener('mouseup', () => {
        mouseDownOrNot = false;
    })
});


// Drag draw and click draw
pixelArray.forEach(pixel => {
    pixel.addEventListener('mouseenter', () => {
        if (mouseDownOrNot) {
            pixel.classList.add('plotted');
        }
    });
    pixel.addEventListener('click', () => {
        pixel.classList.add('plotted')
    });
});

wholePage.addEventListener('mouseup', (e) => {
    mouseDownOrNot = false;
    e.stopPropagation();
})