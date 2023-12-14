// Setting my interval time to use for all anon func
let interval = 2000;

// Two seconds after the page loads, change the "profile-pic" src attribute to a different image
let interval2Sec = setTimeout( () => {
    let profileModifier = document.querySelector('#profile-pic');
    profileModifier.src = 'img/codeup-duck.png';
}, interval);

//Four seconds after the page loads, use innerHTML to change the name in "profile-name"
let interval4sec = setTimeout( () => {
    let profileModifier = document.querySelector('#profile-name');
    profileModifier.innerHTML = ('Poli Doe');
}, interval += 2000);

//Six seconds after page loads, add a new class to "profile-desc"
// that changes the color and font of the description text
let interval6Sec = setTimeout( () => {
    let profileModifier = document.querySelector('#profile-desc');
    profileModifier.classList.add('background-color');
    profileModifier.classList.add('font-adjustment');
}, interval += 2000);

// Write code that toggles a class on the "profile-card"
// that changes its background color every two seconds. Use setInterval.

let intervalEvery2Sec = setInterval( () => {
    let profileModifier = document.querySelector('#profile-card');
    profileModifier.classList.toggle('background-color');
}, 2000);
