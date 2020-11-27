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

  it('should transform to title case with preposition', () => {
    const pipe = new TitleCasePipe();
    const result = pipe.transform('the strong of argue');
    expect(result).toBe('The Strong of Argue');
  });

  it('should transform to title case with mix casing', () => {
    const pipe = new TitleCasePipe();
    const result = pipe.transform('THE STrOng oF arGue');
    expect(result).toBe('The Strong of Argue');
  });
});
