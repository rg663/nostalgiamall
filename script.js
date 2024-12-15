document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded and parsed');
    const buttons = document.querySelectorAll('.item button');
    console.log('Buttons found:', buttons);

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            console.log('Button clicked');
            alert('Item added to cart!');
        });
    });
});

// const audio = document.getElementById('background-noise');

// function toggleAudio() {
//     if (audio.paused) {
//         audio.play();
//     } else {
//         audio.pause();
//     }
// }

// let visitorCount = 456;
// document.querySelector('footer p:first-child').textContent = `You’re visitor #${('000000' + visitorCount).slice(-7)} to this mall!`;

// function loadAnimation() {
//     alert('Loading... Please wait like it’s 1999!');
// }

// window.onload = loadAnimation;

// document.body.addEventListener('keydown', (e) => {
//     if (e.key === 'ArrowUp' && e.ctrlKey) {
//         alert('Konami Code activated! Welcome to the secret 90s desktop view.');
//     }
// });