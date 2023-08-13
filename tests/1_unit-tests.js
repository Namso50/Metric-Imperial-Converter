const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  let tests = ["2mi", "2.5gal", "9/7L", "2.5/3km", "3/2/3lbs", "kg"]
  let units = ["mi", "gal", "L", "km", "lbs", "kg"]
  let returnUnits = ["km", "L", "gal", "mi", "kg", "lbs"]
  let nums = [2, 2.5, 9/7, 2.5/3, false, 1]
  
  suite('Read Inputs', () => {
    for (let i=0; i < 6; i++) {
      test(`Inputs-${i}`, () => {
        assert.equal(convertHandler.getNum(tests[i]), nums[i])
      })
    }
  });

  suite('Read Units', () => {
    test("Inputs-1", () => {
      for (let i=0; i < 6; i++) {
        assert.equal(convertHandler.getUnit(tests[i]), units[i])
      }
    });
    
    test('Inputs-2', () => {
      assert.equal(convertHandler.getUnit("23min"), false)
    });

    test('Inputs-3', () => {
      for (let i=0; i < 6; i++) {
        assert.equal(convertHandler.getReturnUnit(tests[i]), returnUnits[i])
      }
    });

    test('Inputs-4', () => {
      assert.equal(convertHandler.getString("23mi"), "23 miles converts to 37.01482 kilometers")
    });
  });
  
  suite('Converts', () => {
    let convertTest = ["2mi", "2.5gal", "9/7L", "2.5/3km", "3/2lbs", "kg"]
    let returnNums = [3.21,  9.46, 0.33, 0.51, 0.68, 2.20]
    for (let i=0; i < 6; i++) {
      test(`Convertions-${i}`, () => {
      assert.approximately(convertHandler.convert(convertTest[i]), returnNums[i], 0.1)
      })
    }
  });
});