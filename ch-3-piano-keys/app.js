document.querySelectorAll('a').forEach((element, idx) => {
  element.addEventListener('click', () => {
    const sound = new Audio(`audio/key-${idx}.mp3`);
    sound.play();
  })
});