const ring = document.querySelector('div.ring');
const minInput = document.querySelector('div.minutes>input');
const secInput = document.querySelector('div.seconds>input');
const startButton = document.querySelector('button.start');
const settingsButton = document.querySelector('button.settings');

let timer;

startButton.addEventListener('click', () => {
  // Disable editing
  minInput.setAttribute('disabled', true);
  secInput.setAttribute('disabled', true);

  if (timer) {
    stopTimer();
  } else {
    startButton.textContent = 'stop';
    ring.classList.remove('ending');

    let baseTime = new Date();
    const timerMilliseconds = (parseInt(minInput.value) * 60 + parseInt(secInput.value)) * 1000;
    baseTime.setTime(baseTime.getTime() + timerMilliseconds);

    timer = setInterval(() => {
      const now = new Date();
      const diff = new Date(baseTime.getTime() - now.getTime());
      minInput.value = diff.getMinutes().toString().padStart(2, '0');
      secInput.value = diff.getSeconds().toString().padStart(2, '0');

      if (diff.getMinutes() === 0 && diff.getSeconds() === 0) {
        stopTimer(true);
      }
    }, 1000);
  }
});

settingsButton.addEventListener('click', () => {
  stopTimer();

  minInput.removeAttribute('disabled');
  secInput.removeAttribute('disabled');
});

function stopTimer(isEnd = false) {
  startButton.textContent = 'start';
  clearInterval(timer);
  timer = null;

  if (isEnd) {
    ring.classList.add('ending');
    alert('Timer Expired');
  }
}
