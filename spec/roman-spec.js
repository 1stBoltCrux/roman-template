import { convertRoman } from './../src/roman.js';

describe('convertRoman', function() {
  it('should convert a single digit number to Roman numerals', function() {
    var test1 = convertRoman([1]);
    expect(test1).toEqual(["I"]);
    // Example: expect(2).toEqual(2);
  });
});

  describe('convertRoman', function() {
    it('should convert a double digit number to Roman numerals', function() {
      var test2 = convertRoman([2,1]);
      expect(test2).toEqual(["X","II"]);
  });
});
