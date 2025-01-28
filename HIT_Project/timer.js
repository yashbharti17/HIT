// Set the initial countdown time (5 minutes = 300 seconds)
let totalSeconds = 5 * 60;

// Function to update the countdown timer
function updateTimer() {
  // Calculate minutes and seconds
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;

  // Display the time in the format "mm:ss"
  document.getElementById("timer").textContent = `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;

  // Decrease the time by 1 second
  totalSeconds--;

  // If time is up, redirect to the score page
  if (totalSeconds < 0) {
    window.location.href = "score.html"; // Redirect to the score page
  }
}

// Start the timer as soon as the page loads
setInterval(updateTimer, 1000);
