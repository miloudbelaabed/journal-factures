
export default interface IFnposToken {
  name: string;
  exp: number;
  AdvancedUser: string;
  DirectionId: number;
  Direction: string;
  FullName: string;
  Roles: Array<string>;
  Wilayas: Array<number>;
  UserName: string;

  // whatever else is in the JWT.
}
