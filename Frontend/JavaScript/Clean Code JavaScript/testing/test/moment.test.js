const assert = require('assert');
const moment = require('moment');

describe('MomentJS', () => {
  it('handles 30-day months', () => {
    const date = moment('1/1/2015', 'M/D/YYYY');
    date.add(30, 'days');
    assert.equal('01/31/2015', date.format('MM/DD/YYYY'));
  });

  it('handles leap year', () => {
    const date = moment('2/1/2016', 'M/D/YYYY');
    date.add(28, 'days');
    assert.equal('02/29/2016', date.format('MM/DD/YYYY'));
  });

  it('handles non-leap year', () => {
    const date = moment('2/1/2015', 'M/D/YYYY');
    date.add(28, 'days');
    assert.equal('03/01/2015', date.format('MM/DD/YYYY'));
  });
});
