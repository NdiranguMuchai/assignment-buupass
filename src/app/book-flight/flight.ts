export class Flight {
  constructor(
    public id: number,
    public airport: string,
    public destination: string,
    public numberOfPassengers?: number,
    public date?: Date
  ) {
  }
}
