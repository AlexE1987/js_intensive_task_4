const concatStrings = (string, separator) => {
  let sumOfStrings = string;

  const additionalString = (nextString) => {
    if (typeof sumOfStrings !== 'string' || typeof nextString !== 'string') return sumOfStrings;
    if (typeof separator !== 'string') separator = '';

    if (nextString || nextString === '') {
      sumOfStrings += separator + nextString;
      return additionalString;
    }

    return sumOfStrings;
  };

  return additionalString;
};

class Calculator {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.args = [...arguments];
    if (this.args.length !== 2 || this.args.some((e) => !Number.isFinite(e)))
      throw new Error('Invalid number of parameters or value');
  }
  validateMethod(value) {
    if (!Number.isFinite(value)) throw new Error('Invalid parameter value');
  }
  setX = (value) => {
    this.validateMethod(value);
    this.x = value;
  };
  setY = (value) => {
    this.validateMethod(value);
    this.y = value;
  };
  logSum = () => {
    console.log(this.x + this.y);
  };
  logMul = () => {
    console.log(this.x * this.y);
  };
  logSub = () => {
    console.log(this.x - this.y);
  };
  logDiv = () => {
    if (this.y === 0) throw new Error('Value of `y` must not be 0');
    console.log(this.x / this.y);
  };
}
