/**
 * methods to reference HTML element
 * 
 * getElementById - returns a single element based on its ID name
 * getElementsByClassName - returns a list of elements based on classs name
 * 
 * querySelector - use CSS selectors and return first match
 * querySelectorAll - use CSS selectors and return list of matches
 */

// Get reference to the element with ID #one
let heading = document.getElementById("one");
// console.log(heading);

// Tells us all available properties and methods
// console.dir(heading);

// Change element style through DOM
heading.style["background-color"] = "#00bbbb";

let titles = document.getElementsByClassName("title");

let colors = ["#bb00bb", "#00bb00", "#0000bb", "#bb0000", "#bbbb00", "#00bbbb", "#bbbbbb"];
for(let i = 0; i < titles.length; i++) {
    let randomColor = Math.floor(Math.random() * colors.length);
    titles[i].style["color"] = colors[randomColor];
}

let heading2 = document.querySelector("#one");
heading2.innerHTML = "I am become Death, Destroyer of Worlds";

let titles2 = document.querySelectorAll("h1");
for(let i = 0; i < titles.length; i++) {
    titles2[i].style["font-size"] = "2.5em";
}

let bgButton = document.querySelector("#background-button");

let mode = "light";
// Set onclick property to an anonymous function
bgButton.onclick = function(){
    let body = document.querySelector("body");
    if(mode === "light") {
        body.style["background-color"] = "#111111";
        bgButton.innerHTML = "Light Mode (Heathen)";
        mode = "dark";
    }
    else if(mode === "dark") {
        body.style["background-color"] = "#ffffff";
        bgButton.innerHTML = "Dark Mode";
        mode = "light";
    }
}