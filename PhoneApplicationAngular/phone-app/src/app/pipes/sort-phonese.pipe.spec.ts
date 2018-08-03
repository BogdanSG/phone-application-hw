import { sortPhonesePipe } from './sort-phonese.pipe';

describe('sortPhonesePipe', () => {
  it('create an instance', () => {
    const pipe = new sortPhonesePipe();
    expect(pipe).toBeTruthy();
  });
});
