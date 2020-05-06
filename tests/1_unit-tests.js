/*
 *
 *
 *       FILL IN EACH UNIT TEST BELOW COMPLETELY
 *       -----[Keep the tests in the same order!]----
 *       (if additional are added, keep them at the very end!)
 */

var chai = require('chai');
var assert = chai.assert;
var ConvertHandler = require('../controllers/convertHandler.js');

var convertHandler = new ConvertHandler();

suite('Unit Tests', function () {
  suite('Function convertHandler.getNum(input)', function () {
    test('Whole number input', function (done) {
      var input = '32L';
      assert.equal(convertHandler.getNum(input), 32);
      done();
    });

    test('Decimal Input', function (done) {
      var input = '3.4L';
      assert.equal(convertHandler.getNum(input), 3.4);
      done();
    });

    test('Fractional Input', function (done) {
      var input = '2/4km';
      var result = 2 / 4;
      assert.equal(convertHandler.getNum(input), result);
      done();
    });

    test('Fractional Input w/ Decimal', function (done) {
      var input = '2.5/6lbs';
      var result = 2.5 / 6;
      assert.equal(convertHandler.getNum(input), result);
      done();
    });

    test('Invalid Input (double fraction)', function (done) {
      var input = '2/3/5/6km';
      assert.equal(convertHandler.getNum(input), 1);
      done();
    });

    test('No Numerical Input', function (done) {
      var input = 'km';
      assert.equal(convertHandler.getNum(input), 1);
      done();
    });
  });

  suite('Function convertHandler.getUnit(input)', function () {
    test('For Each Valid Unit Inputs', function (done) {
      var input = [
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
      input.forEach(function (ele) {
        assert.equal(convertHandler.getUnit(ele), ele.toLowerCase());
      });
      done();
    });

    test('Unknown Unit Input', function (done) {
      assert.equal(convertHandler.getUnit('12kgj'), 'invalid unit');
      done();
    });
  });

  suite('Function convertHandler.getReturnUnit(initUnit)', function () {
    test('For Each Valid Unit Inputs', function (done) {
      var input = ['gal', 'l', 'mi', 'km', 'lbs', 'kg'];
      var expect = ['l', 'gal', 'km', 'mi', 'kg', 'lbs'];
      input.forEach(function (ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
  });

  suite('Function convertHandler.convert(num, unit)', function () {
    test('Gal to L', function (done) {
      var input = [5, 'gal'];
      var expected = 18.9271;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      ); //0.1 tolerance
      done();
    });

    test('L to Gal', function (done) {
      var input = [18.9271, 'l'];
      var expected = 5;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      ); //0.1 tolerance
      done();
    });

    test('Mi to Km', function (done) {
      var input = [1, 'mi'];
      var expected = 1.60934;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      ); //0.1 tolerance
      done();
    });

    test('Km to Mi', function (done) {
      var input = [3, 'km'];
      var expected = 1.86411;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      ); //0.1 tolerance
      done();
    });

    test('Lbs to Kg', function (done) {
      var input = [1, 'lbs'];
      expected = 0.453592;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      ); //0.1 tolerance
      done();
    });

    test('Kg to Lbs', function (done) {
      var input = [3, 'kg'];
      var expected = 6.61387;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      ); //0.1 tolerance
      done();
    });
  });
});
