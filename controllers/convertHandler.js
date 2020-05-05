/*
 *
 *
 *       Complete the handler logic below
 *
 *
 */

function ConvertHandler() {
  const unit = [
    'gal',
    'l',
    'mi',
    'km',
    'lbs',
    'kg',
    'GAL',
    'L',
    'MI',
    'KM',
    'LBS',
    'KG',
  ];
  this.getNum = function (input) {
    let regex = /\d+\.?\d*/g;
    let regDoubleFraction = /\//g;
    var result = input.match(regex);
    var doubleFraction = input.match(regDoubleFraction);
    //no value default to 1
    if (result === null) return 1;
    //double fraction default to 1
    if (doubleFraction !== null && doubleFraction.length >= 2) {
      return 1;
    } else if (doubleFraction !== null && doubleFraction.length === 1) {
      return result[0] / result[1];
    }
    return result;
  };

  this.getUnit = function (input) {
    let regex = /[a-z]+/i;
    var result = input.match(regex);
    if (result === null) return 'invalid unit';
    if (unit.indexOf(input) >= 0) {
      return input.toLowerCase();
    } else {
      return 'invalid unit';
    }
  };

  this.getReturnUnit = function (initUnit) {
    var result;

    return result;
  };

  this.spellOutUnit = function (unit) {
    var result;

    return result;
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;

    return result;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    var result;

    return result;
  };
}

module.exports = ConvertHandler;
