let mouseDownOrNot = false
, activeColor = 'black';
allowDrawing();


// Sidebar interaction
// Changing pixels
const changePixelBtn = document.querySelector(".sidebar .pixel button");
changePixelBtn.addEventListener('click', () => {
    const input = document.querySelector(".sidebar .pixel input")
    , num = input.value;
    if (num < 1 || num > 100 || isNaN(num)) {
        alert('Number of pixels must be within the range 1 to 100!');
    }
    else {
        const drawingWin = document.querySelector(".drawing-window")
        , drawingPixels = document.querySelector(".drawing-window .big")
        , newDrawingPixels = document.createElement('div');
        newDrawingPixels.className = 'container big';
        drawingWin.removeChild(drawingPixels);
        for (let i = 1; i <= num ; i++) {
            const row = document.createElement("div");
            row.className = 'container row';
            for (let j = 1; j <= num; j++) {
                const onePixel = document.createElement("div");
                onePixel.className = 'item';
                row.appendChild(onePixel);
            }
            newDrawingPixels.appendChild(row);
        }
        drawingWin.appendChild(newDrawingPixels);
    }
    allowDrawing(); // Must readd drawing functionality because elements recreated
    input.value = '';
    input.focus();
})


// Changing color
const colorChoices = document.querySelectorAll(".sidebar .color div");
colorChoices.forEach(colorChoice => {
    colorChoice.addEventListener('click', () => {
        const classList = colorChoice.getAttribute('class');
        activeColor = classList.split(' ')[0]; // Change to first class, the color
    })
})


// Eraser
const eraserBtn = document.querySelector(".sidebar .erase img");
eraserBtn.addEventListener('click', () => {
    activeColor = 'white';
})


// Drawing window interaction
// There are two events to be listened: mousedown and mouseenter.
// When mouseenter happen AND when the mouse is held, change the class of pixel.
// One way to do this is to set up a Boolean, which, when mousedown happen, changed to true.
// When mouseenter happens AND the Boolean is true, change the class.
// When mouseup happens, change the Boolean to false to stop drawing when mouseenter.
function allowDrawing() {

    const pixelArray = document.querySelectorAll(".item")
    , wholePage = document.querySelector("html");

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
                pixel.style.backgroundColor = activeColor;
            }
        });
        pixel.addEventListener('click', () => {
            pixel.style.backgroundColor = activeColor;
        });
    });
    
    // Bug fix if keyup outside pixels
    wholePage.addEventListener('mouseup', (e) => {
        mouseDownOrNot = false;
        e.stopPropagation();
    })
}
