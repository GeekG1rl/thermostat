var thermostat = new Thermostat();

$(document).ready(function(){
  displayTemperature();
  displayPowSavMod();
  setDisplayColour();

  $("#temp-up").click(function(){
    thermostat.increase();
    displayTemperature();
    setDisplayColour();
  });

  $("#temp-down").click(function(){
    thermostat.decrease();
    displayTemperature();
    setDisplayColour();
  });

  $("#reset").click(function() {
    thermostat.reset();
    displayTemperature();
    setDisplayColour();
  });

  $("#power-saving").click(function() {
    thermostat.powerSavingToggle();
    displayPowSavMod();
  });
});

var displayTemperature = function() {
  $("#temperature").text("Temperature: " + thermostat.temperature);
};

var displayPowSavMod = function() {
  $("#power-saving-mode").text("Power Saving Mode: " + thermostat.powerSavingStatus());
}

var setDisplayColour = function() {
  $("body").css("background-color", thermostat.displayColour());
}