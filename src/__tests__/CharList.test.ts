import { CharList } from "../CharList";

describe("CharList", () => {
  const testVal = "bcaxYjkL";
  let list = new CharList(testVal);

  it("getter `length` returns correct length of list", () => {
    expect(list.length).toBe(testVal.length);
  });
  it("method `compare` returns that left val more than right val", () => {
    expect(list.compare(1, 2)).toBe(true);
  });
  it("method `compare` returns that left val less than right val", () => {
    expect(list.compare(3, 4)).toBe(false);
  });
  it("method `swap` changes elements order of list", () => {
    list.swap(0, 1);
    expect(list.data[0]).toBe("c");
    expect(list.data[1]).toBe("b");
  });
  describe('method "sort"', () => {
    const testVal = "bcaxYjkL";
    let list = new CharList(testVal);

    list.sort();
    expect(list.data).toEqual("abcjkLxY");
  });
});
