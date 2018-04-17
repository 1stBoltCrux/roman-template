import { convertRoman } from './../src/roman.js';

describe('convertRoman', function() {
  it('should convert a single digit number to Roman numerals', function() {
    var test = convertRoman([1]);
    expect(test).toEqual(["I"]);
    // expect(2).toEqual(2);
  });
});
//
