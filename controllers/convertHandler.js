function ConvertHandler() {
  const UNITS = {
    gal: 'gallons',
    L: 'liters',
    mi: 'miles',
    km: 'kilometers',
    lbs: 'pounds',
    kg: 'kilograms'
  }

  const CONVERTS = {
    gal_to_L: 3.78541,
    lbs_to_kg: 0.453592,
    mi_to_km: 1.60934
  }

  this.getNum = function(input) {
    let num = input.match(/^[^a-z]*/gi)[0]
    if (!num) return 1;
    // just 1 / and result can be calculated
    if ((num.match(/\//g) || []).length < 2 && eval(num)) return eval(num)

    return false;
  };

  this.getUnit = function(input) {
    let unit = input.match(/[a-z]*$/gi)[0].toLowerCase()
    if (unit == "l") unit = "L" // for testing
    let units = Object.keys(UNITS)

    for (let i = 0; i < units.length; i++) {
      if (unit === units[i]) {
        return unit
      };
    }
    return false;
  };

  this.getReturnUnit = function(input) {
    let initUnit = this.getUnit(input)
    let result = false
    Object.keys(CONVERTS).map(convert => {
      let index = convert.split("_to_").indexOf(initUnit);
      let returnUnit = convert.split("_to_").reverse()[index]
      if (index == 0 || index == 1) result = returnUnit
    });

    return result
  };

  this.convert = function(input) {
    let initNum = this.getNum(input)
    let initUnit = this.getUnit(input)
    let result = false
    Object.keys(CONVERTS).map(convert => {
      index = convert.split("_to_").indexOf(initUnit)
      if (index == 0) result = +(initNum * CONVERTS[convert]).toFixed(5) // + return num
      if (index == 1) result = +(initNum / CONVERTS[convert]).toFixed(5)
    })

    return result;
  };

  this.getString = function(input) {
    let initNum = this.getNum(input)
    let initUnit = this.getUnit(input)
    let returnUnit = this.getReturnUnit(input)
    let returnNum = this.convert(input)
    
      return `${initNum} ${UNITS[initUnit]} converts to ${returnNum} ${UNITS[returnUnit]}`
  }

  this.getJson = function(input) {
    let initNum = this.getNum(input)
    let initUnit = this.getUnit(input)
    
    if (!initNum && !initUnit) {
      return "invalid number and unit"
    } else if (!initNum) {
      return "invalid number"
    } else if (!initUnit) {
      return "invalid unit"
    } else {
      return {
        initNum: this.getNum(input),
        initUnit: this.getUnit(input),
        returnNum: this.convert(input),
        returnUnit: this.getReturnUnit(input),
        string: this.getString(input)
      }
    };
  }
};

module.exports = ConvertHandler;
