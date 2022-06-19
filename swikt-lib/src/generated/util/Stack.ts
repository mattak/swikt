export class Stack<T> {
  private data: T[] = [];

  constructor() {
  }

  public isEmpty(): boolean {
    return this.data.length <= 0;
  }

  public push(e: T) {
    this.data.push(e);
  }

  public pop(): T | undefined {
    if (this.data.length <= 0) return undefined;
    return this.data.pop();
  }

  public peek(): T | undefined {
    if (this.data.length <= 0) return undefined;
    return this.data[this.data.length - 1];
  }

  public clear() {
    this.data = [];
  }
}