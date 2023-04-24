export default function updateTime() {
  // Get current time
  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();

  // Convert to 12-hour time format
  let meridiem = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'

  // Add leading zeros to minutes and seconds
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // Build the time string
  let timeString = hours + ":" + minutes + ":" + seconds + " " + meridiem;

  // Update the clock element
  let clock = document.getElementById("clock");
  clock.textContent = timeString;

  // Set the time of day value based on the current hour
  let timeOfDay = document.getElementById("time-of-day");
  if (hours >= 0 && hours < 12) {
    timeOfDay.textContent = "Good morning";
  } else {
    timeOfDay.textContent = "Good afternoon";
  }
}

// Call updateTime every second to update the clock
setInterval(updateTime, 1000);
