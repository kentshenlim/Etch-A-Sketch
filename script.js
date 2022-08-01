const pixelArray = document.querySelectorAll(".item");
let mouseDownOrNot = false;
const drawingRegion = document.querySelector(".container.big");

pixelArray.forEach(pixel => {
    pixel.addEventListener('mousedown', () => {
        mouseDownOrNot = true;
    })
    pixel.addEventListener('mouseup', () => {
        mouseDownOrNot = false;
    })
})

pixelArray.forEach(pixel => {
    pixel.addEventListener('mouseenter', () => {
        if (mouseDownOrNot) {
            pixel.classList.add('plotted');
        }
    })
})







/*
pixelArray.forEach(pixel => {
    pixel.addEventListener('mousedown', () => {
        pixel.addEventListener('mouseenter', () => {
            pixel.classList.add('plotted');
        })
    })
})*/