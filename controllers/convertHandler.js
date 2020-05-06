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
    if (unit.indexOf(result[0]) >= 0) {
      return result[0].toLowerCase();
    } else {
      return 'invalid unit';
    }
  };

  this.getReturnUnit = function (initUnit) {
    var result;
    switch (initUnit) {
      case 'l':
        return 'gal';
        break;
      case 'gal':
        return 'l';
        break;
      case 'km':
        return 'mi';
        break;
      case 'mi':
        return 'km';
        break;
      case 'kg':
        return 'lbs';
        break;
      case 'lbs':
        return 'kg';
        break;
      default:
        break;
    }
  };

  //hy spellOutUnit exist ? why is this usefull ?
  this.spellOutUnit = function (unit) {
    var result;
    switch (unit) {
      case 'l':
        return 'liters';
        break;
      case 'gal':
        return 'gallons';
        break;
      case 'km':
        return 'kilometers';
        break;
      case 'mi':
        return 'miles';
        break;
      case 'kg':
        return 'kilograms';
        break;
      case 'lbs':
        return 'pounds';
        break;
      default:
        break;
    }
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    switch (initUnit) {
      case 'l':
        return (initNum * 1) / galToL;
        break;
      case 'gal':
        return initNum * galToL;
        break;
      case 'km':
        return (initNum * 1) / miToKm;
        break;
      case 'mi':
        return initNum * miToKm;
        break;
      case 'kg':
        return (initNum * 1) / lbsToKg;
        break;
      case 'lbs':
        return initNum * lbsToKg;
        break;
      default:
        break;
    }
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    var result;

    //because initNum is default, we then know that both were falsy in the beginning
    if (initNum === 1 && initUnit === 'invalid unit') {
      return 'invalid number and unit';
    }
    if (initUnit === 'invalid unit') {
      return 'invalid unit';
    }
    result = `${initNum} ${this.spellOutUnit(
      initUnit
    )} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
    return result;
  };
}

module.exports = ConvertHandler;
