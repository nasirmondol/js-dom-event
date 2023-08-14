// console.log("This is outside dom js")

const makeRed11 = document.getElementById('make-red');
makeRed11.onclick = makeRed;

function makeRed() {
    document.body.style.backgroundColor = 'orange'
}

const makePurple = document.getElementById('purple');
makePurple.onclick = function purpleMake() {
    document.body.style.backgroundColor = 'purple'
}

const pinkMakingColor = document.getElementById('make-pink');

pinkMakingColor.addEventListener('click', makePink)

function makePink() {
    document.body.style.backgroundColor = 'pink';
}

const makeTomatoColor = document.getElementById('tomato');
makeTomatoColor.addEventListener('click', function tomato() {
    document.body.style.backgroundColor = 'tomato'
})

document.getElementById('make-golden').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod'
})

function yellow(){
    document.body.style.backgroundColor = 'yellow'
}