export class Calculator {
  public static sum(numbers: Array<number>): number {
    let result: number = 0

    numbers.forEach((number) => {
      result = result + number
    })

    return result
  }
}