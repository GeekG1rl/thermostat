function Thermostat() {
  this.temperature = 20;
  this.powerSaving = true;
  this.MAX_TEMP = 25;
}

Thermostat.prototype.increase = function() {
  if (this.temperature < this.MAX_TEMP) {
    this.temperature ++;
  }
};

Thermostat.prototype.decrease = function() {
  if (this.temperature > 10) {
    this.temperature --;
  }
};

Thermostat.prototype.powerSavingToggle = function() {
  if (this.powerSaving === true) {
    this.powerSaving = false;
    this.MAX_TEMP = 32;
  } else {
    this.powerSaving = true;
    this.MAX_TEMP = 25;
  }
};