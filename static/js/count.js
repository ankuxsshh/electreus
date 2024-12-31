// Function to animate number counting
function countToNumber(elementId, endValue) {
  let startValue = 0;
  let duration = 7000; // Duration in milliseconds
  let stepTime = Math.abs(Math.floor(duration / endValue));
  let element = document.getElementById(elementId);

  let counter = setInterval(function () {
    startValue += 1;
    element.textContent = startValue;
    if (startValue >= endValue) {
      clearInterval(counter);
      element.textContent = `${endValue}+`; // Append the + sign
    }
  }, stepTime);
}

// Start counting animation on page load
window.onload = function () {
  countToNumber("years", 7); // Count for 7 years
  countToNumber("projects", 120); // Count for 120 projects
  countToNumber("team", 25); // Count for 25 team members
  countToNumber("customers", 150); // Count for 150 customers
};
