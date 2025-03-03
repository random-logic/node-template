import { add } from "./utils";

export function sum(arr: number[]) {
  return arr.reduce((a, b) => add(a, b), 0);
}
