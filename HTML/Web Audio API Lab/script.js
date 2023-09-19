let oscillator = null;

function playSound() {
    const audioContext = new AudioContext();
    oscillator = audioContext.createOscillator();
    oscillator.connect(audioContext.destination);
    oscillator.start();
}

function stopSound () {
    if (oscillator !== null) {
        oscillator.stop();
        oscillator = null;
    }
}

(() => {
    const playButton = document.getElementById('playButton');
    const stopButton = document.getElementById('stopButton');

    if (playButton instanceof HTMLButtonElement) {
        playButton.addEventListener('click', playSound);
    }

    if (stopButton instanceof HTMLButtonElement) {
        stopButton.addEventListener('click', stopSound);
    }
})();