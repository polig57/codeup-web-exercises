// Setting my interval time to use for all anon funcs
let interval = 2000;

// let timerFunc = function() {
//
// }

// Two seconds after the page loads, change the "profile-pic" src attribute to a different image
let interval2Sec =  (e) => {
    let profileModifier = document.querySelector('#profile-pic');
    // profileModifier.src = 'img/codeup-duck.png';
    // Alternate way to so the above code using 'setAttribute'
    profileModifier.setAttribute('src', 'img/codeup-duck.png');

};

let button1 = document.getElementById('profile-pic-btn');
button1.addEventListener('click', interval2Sec)


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


// Add 4 buttons to the page. Attach click event listeners to each of the buttons and have the handlers perform the
// modifications that were automatically taking place.
// For example, the first button should set inner html of mainHeader to "JavaScript is Cool".
