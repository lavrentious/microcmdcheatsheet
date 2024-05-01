export function divideString(s: string, k: number, divider: string): string {
  let ans = "";
  let count = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    ans = s[i] + ans;
    count++;
    if (count % k === 0 && i !== 0) {
      ans = divider + ans;
    }
  }

  return ans;
}
