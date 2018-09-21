const { expect } = require('chai');
const { mult } = require('./mult');

describe('mult()', () => {
  it('shoul return 1 when there are no numbers', () => {
    expect(mult()).to.be.equal(1);
  });

  it('should return the same number when only one is given', () => {
    expect(mult(5)).to.be.equal(5);
  });

  it('should multiply two numbers', () => {
    expect(mult(2, 3)).to.be.equal(6);
  });

  it('should multiply three numbers', () => {
    expect(mult(2, 3, 4)).to.be.equal(24);
  });
});
