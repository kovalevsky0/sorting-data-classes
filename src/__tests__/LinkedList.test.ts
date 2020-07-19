import { LinkedList } from "../LinkedList";

describe("LinkedList", () => {
  describe('field "head"', () => {
    it("is empty", () => {
      const list = new LinkedList();
      expect(list.head).toBe(null);
    });
    it("is the only one node", () => {
      const list = new LinkedList();
      list.add(3);

      expect(list.head).toEqual({
        data: 3,
        next: null,
      });
    });
    it("is a first node and has next node", () => {
      const list = new LinkedList();
      list.add(3);
      list.add(5);

      expect(list.head).toEqual({
        data: 3,
        next: {
          data: 5,
          next: null,
        },
      });
    });
  });
  describe('getter "length"', () => {
    it("returns zero count of nodes", () => {
      const list = new LinkedList();

      expect(list.length).toBe(0);
    });
    it("returns correct count of added nodes", () => {
      const list = new LinkedList();
      list.add(3);
      list.add(5);
      list.add(9);

      expect(list.length).toBe(3);
    });
  });
  describe('method "at"', () => {
    it("throws error when list does not have nodes", () => {
      const list = new LinkedList();
      expect(() => list.at(0)).toThrow();
    });
    it("returns Node from this index", () => {
      const list = new LinkedList();
      list.add(3);
      list.add(5);
      list.add(9);

      expect(list.at(1)).toEqual({
        data: 5,
        next: {
          data: 9,
          next: null,
        },
      });
    });
  });
  describe('method "compare"', () => {
    describe("without any nodes", () => {
      const list = new LinkedList();

      it("throws error when list does not have nodes", () => {
        expect(() => list.compare(0, 0)).toThrow();
      });
    });
    describe("with several nodes", () => {
      const list = new LinkedList();

      list.add(12);
      list.add(8);
      list.add(13);
      list.add(7);
      list.add(2);

      it("returns that left val more than right val", () => {
        expect(list.compare(0, 1)).toBe(true);
      });
      it("returns that left val less than right val", () => {
        expect(list.compare(1, 2)).toBe(false);
      });
    });
  });
  describe('method "swap"', () => {
    const list = new LinkedList();

    list.add(12);
    list.add(8);
    list.add(13);
    list.add(7);
    list.add(2);

    it("method `swap` changes elements order of list", () => {
      list.swap(0, 1);
      expect(list.at(0).data).toBe(8);
      expect(list.at(1).data).toBe(12);
    });
  });
  describe('getter "values"', () => {
    it("return empty array", () => {
      const list = new LinkedList();

      expect(list.values).toEqual([]);
    });
    it("returns values of added nodes", () => {
      const list = new LinkedList();

      list.add(12);
      list.add(8);
      list.add(13);
      list.add(7);
      list.add(2);

      expect(list.values).toEqual([12, 8, 13, 7, 2]);
    });
  });
  it("sort nodes", () => {
    const list = new LinkedList();

    list.add(12);
    list.add(8);
    list.add(13);
    list.add(7);
    list.add(2);

    list.sort();

    expect(list.values).toEqual([2, 7, 8, 12, 13]);
  });
});
