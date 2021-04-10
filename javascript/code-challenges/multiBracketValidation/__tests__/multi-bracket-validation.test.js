let bracketValidation = require('../multi-bracket-validation');

describe('Multi-Bracket Test', () => {
  it('Will equal true', () => {
    expect(bracketValidation('()[[Extra Characters]]')).toBeTruthy();
    expect(bracketValidation('{}')).toBeTruthy();
    expect(bracketValidation('{([])}')).toBeTruthy();
    expect(bracketValidation('{}{Code}[Fellows](())')).toBeTruthy();
  });

  it('Will equal falsey', () => {
    expect(bracketValidation('[({}]')).toBeFalsy();
    expect(bracketValidation('(](')).toBeFalsy();
    expect(bracketValidation('{(})')).toBeFalsy();
  });

  it('Will equal falsey', () => {
    expect(bracketValidation(1234)).toBeFalsy();
    expect(bracketValidation(true)).toBeFalsy();
    expect(bracketValidation([])).toBeFalsy();
  });

});