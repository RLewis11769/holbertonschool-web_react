import { getFullYear, getFooterCopy, getLatestNotification } from './utils';
import { assert } from 'chai';

describe('Utility functions', () => {
  // Tests for utility functions

  it('Verify that getFullYear returns current year (2022)', () => {
    assert.equal(getFullYear(), 2022);
  });

  it('Verify that return statement for getFooterCopy is correct for true', () => {
    assert.equal(getFooterCopy(1), 'Holberton School');
  });

  it('Verify that return statement for getFooterCopy is correct for false', () => {
   assert.equal(getFooterCopy(0), 'Holberton School main dashboard');
  });

  it('Verify that return statement for getLatestNotification is correct', () => {
    assert.equal(getLatestNotification(), '<strong>Urgent requirement</strong> - complete by EOD'
    );
  });

});
