export default class Bit {
  private value: boolean;

  constructor(value: number) {
    this.value = value !== 0;
  }

  public invert() {
    this.value = !this.value;
  }

  public setValue(value: boolean | number) {
    if (typeof value === "boolean") this.value = value;
    else this.value = value !== 0;
  }

  public asBool(): boolean {
    return this.value;
  }

  public asInt(): number {
    return +this.value;
  }
}
