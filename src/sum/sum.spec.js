const { expect } = require('chai');
const { sum } = require('./sum');

describe('sum()', () => {
  it('shoul return 0 when there are no numbers', () => {
    expect(sum()).to.be.equal(0);
  });

  it('should return the same number when only one is given', () => {
    expect(sum(1)).to.be.equal(1);
  });

  it('should sum two numbers', () => {
    expect(sum(1, 2)).to.be.equal(3);
  });

  it('should sum three numbers', () => {
    expect(sum(1, 2, 3)).to.be.equal(6);
  });
});
