export class Flight {
  constructor(
    public id: number,
    public airport: string,
    public destination: string,
    public numberOfPassengers?: number,
    public date?: Date
  ) {
    // const myHero =  new Hero(42, 'SkyDog',
    //   'Fetch any object at any distance',
    //   'Leslie Rollover');
    // console.log('My hero is called ' + myHero.name); // "My hero is called SkyDog"
  }
}
