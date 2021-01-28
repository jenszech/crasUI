import Room from './models/Room';
import RoomAgenda from './models/RoomAgenda';

export default class DataService {
  public static getRooms(): Promise<Room[] | null> {
    const url = this.getBasicUrl(process.env.REACT_APP_ENDPOINT_ROOM);
    return this.httpCall(url, {}).then((data) => {
      if (data === null) return null;
      const rooms = new Array<Room>();
      // eslint-disable-next-line no-restricted-syntax
      for (const roomJson of data) {
        const room = new Room();
        room.updateByJson(roomJson);
        rooms.push(room);
      }
      return rooms;
    });
  }

  public static getTasksByRooms(roomId: string): Promise<RoomAgenda> {
    const url = this.getBasicUrl(process.env.REACT_APP_ENDPOINT_ROOM_DETAIL);
    console.log(`DataService.getTasksByRooms - load: ${url} ${roomId}`);
    return this.httpCall(url + roomId, {}).then((data) => {
      const agenda = new RoomAgenda();
      agenda.updateByJson(data);
      return agenda;
    });
  }

  public static putTasksByRooms(roomId: string, start: Date, duration: number): Promise<boolean> {
    let url = this.getBasicUrl(process.env.REACT_APP_ENDPOINT_ROOM_DETAIL);
    url += `${roomId}?start=${start.toISOString()}&duration=${duration}&room=${roomId}`;
    console.log(`DataService.putTasksByRooms - store: ${url} ${roomId}`);
    return this.httpCall(url, { method: 'PUT' }).then((data) => {
      return data.booked === 'true';
    });
  }

  private static getBasicUrl(endpoint: string | undefined) {
    let url = 'http://localhost';
    if (process.env.REACT_APP_API !== undefined && endpoint !== undefined) {
      url = process.env.REACT_APP_API + endpoint;
    }
    return url;
  }

  private static httpCall(url: string, options: any): Promise<any> {
    return fetch(url, options).then((response) => {
      const contentType = response.headers.get('content-type');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      if (!contentType || !contentType.includes('application/json')) {
        throw new TypeError("Oops, we haven't got JSON!");
      }
      return response.json();
    });
  }
}
