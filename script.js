function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  const pressedKey = document.querySelector(
    `.key[data-key="${e.keyCode}"]`
  );

  if (!audio) return;

  pressedKey.classList.add("playing");

  audio.currentTime = 0;
  audio.play();
  setTimeout(() => pressedKey.classList.remove("playing"), 150);
}

function stopSound(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

window.addEventListener("keydown", playSound);