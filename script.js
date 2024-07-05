const generateHexColor = () => {
    let color = "#";
    let hex = "0123456789abcdef";
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}






const button1 = document.getElementById("btn1");
const button2 = document.getElementById("btn2");
const myDiv = document.querySelector(".copyCode");
let rgb1 = "#051937";
let rgb2 = "#008793"


// Events
button1.addEventListener("click", () => {
    rgb1 = generateHexColor();
    console.log("rgb1: ", rgb1);
    button1.innerText = `${rgb1}`;
    document.body.style = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2});`;
    myDiv.textContent = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2});`;
});

button2.addEventListener("click", () => {
    rgb2 = generateHexColor();
    console.log("rgb2: ", rgb2);
    button2.innerText = `${rgb2}`;
    document.body.style = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2});`;
    myDiv.textContent = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2});`;
});

myDiv.addEventListener("click", () => {
    navigator.clipboard.writeText(myDiv.innerText);
    alert("Your content is copied succesfully");
});