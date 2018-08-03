import { searchPhonesPipe } from './search-phones.pipe';

describe('searchPhonesPipe', () => {
  it('create an instance', () => {
    const pipe = new searchPhonesPipe();
    expect(pipe).toBeTruthy();
  });
});
