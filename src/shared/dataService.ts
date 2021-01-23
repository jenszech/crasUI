export default class DataService {
  public static getRooms(): Promise<any> {
    let url = 'http://localhost';
    if (process.env.REACT_APP_API !== undefined && process.env.REACT_APP_ENDPOINT_ROOM !== undefined) {
      url = process.env.REACT_APP_API + process.env.REACT_APP_ENDPOINT_ROOM;
    }
    return fetch(url).then((response) => {
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

  public static getTasksByRooms(roomId: string): Promise<any> {
    let url = 'http://localhost';
    if (process.env.REACT_APP_API !== undefined && process.env.REACT_APP_ENDPOINT_ROOM !== undefined) {
      url = process.env.REACT_APP_API + process.env.REACT_APP_ENDPOINT_ROOM_DETAIL;
    }
    return fetch(url + roomId).then((response) => {
      console.log(`DataService.getTasksByRooms - load: ${url} ${roomId}`);
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
  public static putTasksByRooms(roomId: string, start: Date, duration: number): Promise<any> {
    let url = 'http://localhost';
    if (process.env.REACT_APP_API !== undefined && process.env.REACT_APP_ENDPOINT_ROOM !== undefined) {
      url = process.env.REACT_APP_API + process.env.REACT_APP_ENDPOINT_ROOM_DETAIL;
    }
    url += `${roomId}?start=${start.toISOString()}&duration=${duration}&room=${roomId}`;
    return fetch(url + roomId, {
      method: 'PUT',
    }).then((response) => {
      console.log(`DataService.putTasksByRooms - store: ${url} ${roomId}`);
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
