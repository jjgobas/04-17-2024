ScrollReveal({
    reset: true,
    distance: '20px',
    delay:10,
    duration: 1000
})
ScrollReveal().reveal('.hero');
ScrollReveal().reveal('.hero');
ScrollReveal().reveal('.card', {delay: 20});

let birthdayLine = document.querySelector('#happy_birthday')

birthdayLine.addEventListener('mouseover', () => {
    confetti ({
        particleCount: 100, 
        spread: 200,
     });
})

let previewTab = document.querySelectorAll('.view-tab');
let openPreview = document.querySelectorAll('#openBtn');
let closePreview = document.querySelectorAll('#closeBtn')

// OPEN THE TAB
const addActive = function (click) {
    previewTab[click].classList.add('active');
}

openPreview.forEach((open, i) => {
    open.addEventListener("click", () => {
        addActive(i);
    });
});

// CLOSE THE TAB
closePreview.forEach((close) => {
    close.addEventListener("click", () => {
        previewTab.forEach((Tab) => {
            Tab.classList.remove('active');
        })
    })
})




