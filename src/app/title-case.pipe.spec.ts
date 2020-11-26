import { TitleCasePipe } from './title-case.pipe';

describe('TitleCasePipe', () => {
  it('create an instance', () => {
    const pipe = new TitleCasePipe();
    expect(pipe).toBeTruthy();
  });

  it('should return empty string on falsy value', () => {
    const pipe = new TitleCasePipe();
    const result = pipe.transform(null);
    expect(result).toBe('');
  });

  it('should return empty string on empty value', () => {
    const pipe = new TitleCasePipe();
    const result = pipe.transform('');
    expect(result).toBe('');
  });

  it('should transform to title case without preposition', () => {
    const pipe = new TitleCasePipe();
    const result = pipe.transform('strong argue');
    expect(result).toBe('Strong Argue');
  });
});
