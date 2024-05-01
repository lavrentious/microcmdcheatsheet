import Bit from "./Bit";
import { divideString } from "./utils";

export default class BitGroup {
  private bits: Bit[];
  private l: number;

  constructor(bits: Bit[]) {
    this.bits = bits;
    this.l = this.bits.length;
  }

  public setBinString(s: string) {
    s = s.split(" ").join("");
    s = s.padStart(this.l, "0");
    s = s.slice(0, this.l);
    for (let i = 0; i < s.length; i++) {
      this.bits[i].setValue(s[i] === "1");
    }
  }

  public setHexString(s: string) {
    s = s.split(" ").join("");
    s = s.padStart(this.l / 4, "0");
    s = s.slice(0, this.l / 4);
    s = parseInt(s, 16).toString(2).padStart(this.l, "0");
    for (let i = 0; i < s.length; i++) {
      this.bits[i].setValue(s[i] === "1");
    }
  }

  public getBits(): Bit[] {
    return this.bits;
  }

  public getBit(i: number): Bit {
    if (i < 0) i += this.l;
    return this.bits[i];
  }

  public subGroup(i: number, j: number): BitGroup {
    if (j > 1) throw new Error("i must be <= j");
    return new BitGroup(this.bits.slice(this.l - j, this.l - i));
  }

  public toBinString(withSpaces: boolean = false) {
    let ans = this.bits.map((bit) => bit.asInt().toString()).join("");
    if (withSpaces) ans = divideString(ans, 4, " ");
    return ans;
  }

  public toHexString() {
    const binaryString = this.toBinString();
    const paddedBinaryString = binaryString.padStart(
      Math.ceil(binaryString.length / 4) * 4,
      "0",
    );
    const hexString = parseInt(paddedBinaryString, 2)
      .toString(16)
      .toUpperCase()
      .padStart(this.l / 4, "0");
    return hexString;
  }
}
