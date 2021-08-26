import { IMap, SquareLength, preHtmlMap, coordinates } from "./imap";

export class Bigmap extends IMap<number[][]> {
  public get center(): coordinates {
    const inOne = this.array.reduce((a, v) => a.concat(v)).filter(x => x[0][0])
    let x = this.array.map((x, i) => x.map(y => y[0][0] ? i+0.5 : 0)).reduce((a, v) => a.concat(v)).reduce((a, v) => a + v) / inOne.length * SquareLength
    let y = this.array.map(x => x.map((y, j) => y[0][0] ? j+0.5 : 0)).reduce((a, v) => a.concat(v)).reduce((a, v) => a + v) / inOne.length * SquareLength

    return { x, y }
  }
}