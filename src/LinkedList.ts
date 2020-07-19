import { Node } from "./Node";
import { Sortable, ListSorter } from "./ListSorter";

export class LinkedList extends ListSorter implements Sortable {
  head: Node | null = null;

  get length(): number {
    if (!this.head) {
      return 0;
    }

    let length = 1;
    let node = this.head;

    while (node.next) {
      length++;
      node = node.next;
    }

    return length;
  }

  get values(): number[] {
    if (!this.head) {
      return [];
    }

    let node = this.head;
    let values = [node.data];

    while (node.next) {
      node = node.next;
      values.push(node.data);
    }

    return values;
  }

  add(value: number): void {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      return;
    }

    let last = this.head;

    while (last.next) {
      last = last.next;
    }

    last.next = node;
  }

  // get
  at(index: number): Node {
    if (!this.head) {
      throw new Error();
    }

    let counter = 0;
    let node: Node | null = this.head;

    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }

    throw new Error();
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error();
    }

    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    const temp = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = temp;
  }
}
