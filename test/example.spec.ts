import { Calculator } from "../src/example"

describe("Calculator", () => {
  it("Should sum two numbers", () => {
    const numbers: Array<number> = [1, 2]

    const result: number = Calculator.sum(numbers)

    const expectedResult: number = 3
    expect(result).toBe(expectedResult)
  })
})