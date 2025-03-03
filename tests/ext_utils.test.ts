import { sum } from "../src/ext_utils";

jest.mock("../src/config", () => ({
  debug: true,
}));

it("adds [1, 2, 3] to be 6", () => {
  expect(sum([1, 2, 3])).toBe(6);
});
