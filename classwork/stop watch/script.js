let intervalId;
let startTime;
let elapsedTime = 0;

function formatTime(ms) {
  return new Date(ms).toISOString().slice(14, 19);
}

function updateTime() {
  const currentTime = new Date().getTime() - startTime + elapsedTime;
  document.getElementById("time").textContent = formatTime(currentTime);
}

function startTimer() {
  startTime = new Date().getTime();
  intervalId = setInterval(updateTime, 10);
}

function stopTimer() {
  clearInterval(intervalId);
  elapsedTime += new Date().getTime() - startTime;
}

function resetTimer() {
  clearInterval(intervalId);
  elapsedTime = 0;
  document.getElementById("time").textContent = "00:00";
}

document.getElementById("startBtn").addEventListener("click", startTimer);
document.getElementById("stopBtn").addEventListener("click", stopTimer);
document.getElementById("resetBtn").addEventListener("click", resetTimer);
