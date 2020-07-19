import { NumbersList } from "../NumbersList";

describe("NumbersList", () => {
  const arrOfNumbers = [12, 8, 13, 7, 2];
  let list = new NumbersList(arrOfNumbers);

  it("getter `length` returns correct length of list", () => {
    expect(list.length).toBe(arrOfNumbers.length);
  });
  it("method `compare` returns that left val more than right val", () => {
    expect(list.compare(0, 1)).toBe(true);
  });
  it("method `compare` returns that left val less than right val", () => {
    expect(list.compare(1, 2)).toBe(false);
  });
  it("method `swap` changes elements order of list", () => {
    list.swap(0, 1);
    expect(list.data[0]).toBe(8);
    expect(list.data[1]).toBe(12);
  });
  describe('method "sort"', () => {
    it("sort list of numbers", () => {
      const numbersList = new NumbersList([12, 8, 13, 7, 2]);
      numbersList.sort();
      expect(numbersList.data).toEqual([2, 7, 8, 12, 13]);
    });
  });
});
