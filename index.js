var numberOfDrums = document.querySelectorAll(".drum").length;
// var audio = new Audio("./sounds/tom-1.mp3");
//                 audio.play();

let tom1 = new Audio("./sounds/tom-1.mp3");
let tom2 = new Audio("./sounds/tom-2.mp3");
let tom3 = new Audio("./sounds/tom-3.mp3");
let tom4 = new Audio("./sounds/tom-4.mp3");
let snare = new Audio("./sounds/snare.mp3");
let crash = new Audio("./sounds/crash.mp3");
let kickBass = new Audio("./sounds/kick-bass.mp3");



for(let i=0; i<numberOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", () => {
        switch (i) {
            case 0: 
                tom1.play();
                break;
            case 1:
                tom2.play();
                break;
            case 2: 
                tom3.play();
                break;
            case 3: 
                tom4.play();
                break;
            case 4: 
                snare.play();
                break;
            case 5: 
                crash.play();
                break;
            case 6: 
                kickBass.play();
                break;
        }
    });
}