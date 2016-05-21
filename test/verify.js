import {expect} from 'chai';

describe('Tests', () => {

  it('working', () => {
    expect('A').to.equal('A');
  });

  it('working async', (done) => {
    setTimeout(done, 1);
  });

});
