// Variables to store the click count, click rate, and upgrade cost
let clickCount = 0;
let clickRate = 1;
let upgradeCost = 10;

// Get references to the square, click count, click rate, and upgrade elements
const square = document.getElementById("square");
const clickCountElement = document.getElementById("clickCount");
const clickRateElement = document.getElementById("clickRate");
const upgradeButton = document.getElementById("upgrade");

// Add event listener to the square element
square.addEventListener("click", function() {
  // Increment the click count based on the current click rate
  clickCount += clickRate;

  // Update the click count element
  clickCountElement.textContent = clickCount.toString();
});

// Add event listener to the upgrade button
upgradeButton.addEventListener("click", function() {
  // Check if the player has enough clicks to purchase the upgrade
  if (clickCount >= upgradeCost) {
    // Deduct the upgrade cost from the click count
    clickCount -= upgradeCost;

    // Increase the click rate by 1
    clickRate += 1;

    // Update the click count, click rate, and upgrade cost elements
    clickCountElement.textContent = clickCount.toString();
    clickRateElement.textContent = clickRate.toString();

    // Increase the upgrade cost for the next upgrade
    upgradeCost *= 2;
    upgradeButton.textContent = `Upgrade Click Rate (Cost: ${upgradeCost} clicks)`;
  }
});
