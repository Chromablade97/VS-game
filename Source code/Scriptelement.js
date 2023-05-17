let clickCount = 0;
          let clickRate = 1;
          let upgradeCosts = [10, 50, 100, 200, 500, 1000, 2000, 5000, 10000];
          let farmUpgradeCost = 5000;
          let factoryUpgradeCost = 20000;
          let farmUpgradeActive = false;
          let factoryUpgradeActive = false;
          let rebirthCost = 50000;
          let rebirthMultiplier = 2;
      
          const square = document.getElementById("square");
          const clickCountElement = document.getElementById("clickCount");
          const upgradeButtons = document.querySelectorAll(".upgrade");
          const openUpgradeTreeButton = document.getElementById("open-upgrade-tree");
          const farmUpgradeButton = document.getElementById("farm-upgrade");
          const factoryUpgradeButton = document.getElementById("factory-upgrade");
          const rebirthButton = document.getElementById("rebirth-button");
      
          function updateClickCount() {
            clickCountElement.textContent = clickCount;
          }
      
          function purchaseUpgrade(cost, rateIncrease) {
            if (clickCount >= cost) {
              clickCount -= cost;
              clickRate += rateIncrease;
              updateClickCount();
              return true;
            }
            return false;
          }
      
          function purchaseFarmUpgrade() {
            if (clickCount >= farmUpgradeCost) {
              clickCount -= farmUpgradeCost;
              farmUpgradeActive = true;
              updateClickCount();
              return true;
            }
            return false;
          }
      
          function purchaseFactoryUpgrade() {
            if (clickCount >= factoryUpgradeCost) {
              clickCount -= factoryUpgradeCost;
              factoryUpgradeActive = true;
              updateClickCount();
              return true;
            }
            return false;
          }
      
          function purchaseRebirth() {
            if (clickCount >= rebirthCost) {
              clickCount = 0;
              clickRate *= rebirthMultiplier;
              updateClickCount();
              return true;
            }
            return false;
          }
      
          function handleUpgradeButtonClick() {
            const upgradeIndex = Array.from(upgradeButtons).indexOf(this);
            const upgradeCost = upgradeCosts[upgradeIndex];
            if (purchaseUpgrade(upgradeCost, 1)) {
              upgradeCosts[upgradeIndex] *= 2;
              this.textContent = `Upgrade Click Rate (Cost: ${upgradeCosts[upgradeIndex]} clicks)`;
            }
          }
      
          function handleOpenUpgradeTreeButtonClick() {
            openUpgradeTreeButton.style.display = "none";
            document.querySelector(".upgrade-tree").style.display = "block";
          }
      
          function handleFarmUpgradeButtonClick() {
            if (purchaseFarmUpgrade()) {
              farmUpgradeButton.disabled = true;
              farmUpgradeButton.textContent = "Farm Upgrade (Purchased)";
            }
          }
      
          function handleFactoryUpgradeButtonClick() {
            if (purchaseFactoryUpgrade()) {
              factoryUpgradeButton.disabled = true;
              factoryUpgradeButton.textContent = "Factory Upgrade (Purchased)";
            }
          }
          function handleRebirthButtonClick() {
  if (purchaseRebirth()) {
    rebirthCost *= rebirthMultiplier;
    rebirthButton.textContent = `Rebirth (Cost: ${rebirthCost} clicks)`;
  }
}

square.addEventListener("click", function() {
  clickCount += clickRate;
  updateClickCount();
});

upgradeButtons.forEach(button => {
  button.addEventListener("click", handleUpgradeButtonClick);
});

openUpgradeTreeButton.addEventListener("click", handleOpenUpgradeTreeButtonClick);
farmUpgradeButton.addEventListener("click", handleFarmUpgradeButtonClick);
factoryUpgradeButton.addEventListener("click", handleFactoryUpgradeButtonClick);
rebirthButton.addEventListener("click", handleRebirthButtonClick);

setInterval(function() {
  if (farmUpgradeActive) {
    clickCount += 1000;
    updateClickCount();
  }
}, 60000);

setInterval(function() {
  if (factoryUpgradeActive) {
    clickCount += 10000;
    updateClickCount();
  }
}, 300000);
