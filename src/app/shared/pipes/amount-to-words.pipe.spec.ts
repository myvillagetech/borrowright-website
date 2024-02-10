import { AmountToWordsPipe } from './amount-to-words.pipe';

describe('AmountToWordsPipe', () => {
  it('create an instance', () => {
    const pipe = new AmountToWordsPipe();
    expect(pipe).toBeTruthy();
  });
});
