const concatStrings = (string, separator) => {
  let sumOfStrings = [string];

  const additionalString = (nextString) => {
    if (Number.isFinite(nextString) || typeof nextString === 'bigint') {
      return sumOfStrings.join(separator || '');
    }

    if (nextString || nextString === '') {
      sumOfStrings.push(nextString);
      return additionalString;
    }

    return sumOfStrings.join(separator || '');
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
    return this.x + this.y;
  };
  logMul = () => {
    return this.x * this.y;
  };
  logSub = () => {
    return this.x - this.y;
  };
  logDiv = () => {
    if (this.y === 0) throw new Error('Value of `y` must not be 0');
    return this.x / this.y;
  };
}
