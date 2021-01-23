import Room from '../models/Room';

export default interface IStateFloorList {
  floors: string[];
  rooms: Map<string, Room[]>;
}
