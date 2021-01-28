import DataService from './dataService';
import Room from './models/Room';

export default class RoomService {
  private roomsByFloor: Map<string, Array<Room>> = new Map<string, Array<Room>>();
  private dataService = new DataService();

  public loadRooms(callbackFunction: () => void): void {
    if (this.roomsByFloor.size === 0) {
      console.log('RoomService.loadRooms');
      DataService.getRooms()
        .then((roomList) => {
          if (roomList != null) {
            this.roomsByFloor = RoomService.getFloorMap(roomList);
            console.log(`RoomService.loadRooms - loading completed: ${this.roomsByFloor}`);
          }
          callbackFunction();
        })
        .catch((error) => console.error(error));
    } else {
      console.log('RoomService.loadRooms - Rooms already loaded');
    }
  }

  private static getFloorMap(roomList: Room[]): Map<string, Array<Room>> {
    const roomsByFloor = new Map<string, Array<Room>>();
    roomList.forEach((room: Room) => {
      const key = room.meta.etage;
      if (!roomsByFloor.has(key)) {
        roomsByFloor.set(key, new Array<Room>());
      }
      roomsByFloor.get(key)?.push(room);
    });
    return new Map([...roomsByFloor.entries()].sort());
  }

  public getRooms(): Map<string, Room[]> {
    return this.roomsByFloor;
  }

  public getFloors(): IterableIterator<string> {
    return this.roomsByFloor.keys();
  }

  public getRoomByFloor(floor: string): Room[] | undefined {
    if (this.roomsByFloor.get(floor) === undefined) return [];
    return this.roomsByFloor.get(floor);
  }
}
