const progressBar = document.getElementsByClassName("progress-bar")[0];

setInterval(() => {
  const computedStyle = getComputedStyle(progressBar);
  const width = parseFloat(computedStyle.getPropertyValue("--width")) || 0;
  progressBar.style.setProperty("--width", width < 97 ? width + 0.1 : width);
}, 5);
