const containerEl = document.querySelector(".container");

//To generate/create a div box automatically and add class to it for 30 times.
for (let index = 0; index < 30; index++) {
    const colorContainerEl = document.createElement('div');
    colorContainerEl.classList.add("color-container");
    
//Now we need to append the newly created element inside the containerEl
    containerEl.appendChild(colorContainerEl);
}

//To store all the 30 generated colors in a variabe
const colorContainerEls = document.querySelectorAll(".color-container");




generateColors();





//Taking value from randomColor() for each 0f the 30 colorContainerEls created and 
//storing it to newColorCode.
function generateColors(){
    colorContainerEls.forEach((colorContainerEl)=>{
        const newColorCode = randomColor();
//Using newColorCode to change color of each div. All styling already done in css.
        colorContainerEl.style.backgroundColor = "#" + newColorCode;
//Using newColorCode to to write text each div. All styling already done in css.
    colorContainerEl.innerText = "#" + newColorCode;
    })
}




//Creating a function for generating random color
function randomColor(){
    const character = "0123456789abcdef";
    const colorCodeLength = 6;
    let colorCode = "";

    for (let index = 0; index < colorCodeLength; index++) {
        const randomNum = Math.ceil(Math.random()*character.length);
        colorCode = colorCode + character.substring(randomNum,randomNum+1);
    }
//This entire function will return the colorCode.    
    return colorCode;
}
