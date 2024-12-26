let countdown = 5;
const timerElement = document.getElementById('timer');

const interval = setInterval(() => {
  countdown--;
  timerElement.textContent = countdown;
  
  if (countdown === 0) {
    clearInterval(interval);
    // You can add more code here to do something when the timer reaches 0
    timerElement.textContent = "Role Assigned!";
  }
}, 1000); // Decreases the countdown every second
