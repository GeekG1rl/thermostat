describe("Thermostat", function() {
  var thermostat;
  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("starts at 20 degrees", function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it("starts in power saving mode", function() {
    expect(thermostat.powerSaving).toEqual(true);
  });

  it("Up temperature button", function() {
    thermostat.increase();
    expect(thermostat.temperature).toEqual(21);
  });

  it("Down temperature button", function() {
    thermostat.decrease();
    expect(thermostat.temperature).toEqual(19);
  });

  it("Minimum temperature is 10 degrees", function() {
    thermostat.temperature = 10;
    thermostat.decrease();
    expect(thermostat.temperature).toEqual(10);
  });

  it("can turn power saving mode off", function() {
    thermostat.powerSavingToggle();
    expect(thermostat.powerSaving).toEqual(false);
  });

  it("can turn power saving mode on", function() {
    thermostat.powerSaving = false;
    thermostat.powerSavingToggle();
    expect(thermostat.powerSaving).toEqual(true);
  });

  it("Max temperature with Power Saving Mode ON is 25 degrees", function() {
    expect(thermostat.MAX_TEMP).toEqual(25);
  });

  it("Max temperature with Power Saving Mode OFF is 32 degrees", function() {
    thermostat.powerSavingToggle();
    expect(thermostat.MAX_TEMP).toEqual(32);
  });

  it("Can't increase past max temp", function() {
    thermostat.temperature = thermostat.MAX_TEMP;
    thermostat.increase();
    expect(thermostat.temperature).toEqual(thermostat.MAX_TEMP);
  });

});