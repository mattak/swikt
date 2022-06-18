export class Calculator {
    static version = '1'
    constructor() {}
    public add(a: number, b: number) {
        console.log(`version ${Calculator.version}`)
        return a + b
    }
}
