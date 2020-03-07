import {DataService} from "./dataService";
import {Room} from './models/Room';
//import {AusstattungType} from './models/AusstattungType';


export class RoomService {
    private roomsByFloor: Map<string, Array<Room>> = new Map<string, Array<Room>>();
    private dataService = new DataService();

    public loadRooms(callbackFunction:() => void) {
        if (this.roomsByFloor.size === 0) {
            console.log("Fetch Rooms");
             this.dataService.getRooms()
                .then(result => {
                    this.roomsByFloor = this.parseJson(result);
                    console.log("Fetch Roomlist loaded: " + this.roomsByFloor);
                    callbackFunction();
                })
                .catch((error) => console.error(error));
        } else {
            console.log("Rooms already loaded")
        }
    }

    private parseJson(result:any): Map<string, Array<Room>> {
        let roomsByFloor = new Map<string, Array<Room>>();
        result.forEach((room: Room) => {
            const key = room.meta.etage;
            if (!roomsByFloor.has(key)) {
                roomsByFloor.set(key, new Array<Room>());
            }
            // @ts-ignore
            roomsByFloor.get(key).push(room);
        });
        // @ts-ignore
        return new Map([...roomsByFloor.entries()].sort());
    }

    public getRooms() {
        return this.roomsByFloor;
    }

    public getFloors() {
        return this.roomsByFloor.keys();
    }

    public getRoomByFloor(floor: string) {
        if (this.roomsByFloor.get(floor) === undefined) return [];
        return this.roomsByFloor.get(floor);
    }
}