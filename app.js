
/**
 * Project Requirements:
 * - Change the background color as you wish by searching or by generating random rbg color by clicking a button
 */

// step 1- create onload handler
window.onload = () => {
   main();
}

function main() {
 const root =document.getElementById('root');
 const btn = document.getElementById('change-btn');

 btn.addEventListener('click',function() {
    const rgbColor=createRGBColors();
    root.style.backgroundColor=rgbColor;
 })
}

function createRGBColors() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgb(${red},${green},${blue})`;

}