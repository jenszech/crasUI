
export class DataService {
    public getRooms() {
        let url = "http://localhost";
        if ((process.env.REACT_APP_API !== undefined) && (process.env.REACT_APP_ENDPOINT_ROOM !==undefined)) {
            url = process.env.REACT_APP_API + process.env.REACT_APP_ENDPOINT_ROOM;
        }
        return fetch(url)
            .then(response => {
                const contentType = response.headers.get('content-type');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                if (!contentType || !contentType.includes('application/json')) {
                    throw new TypeError("Oops, we haven't got JSON!");
                }
                return response.json();
            })
    }

    public getTasksByRooms(roomId:string) {
        let url = "http://localhost";
        if ((process.env.REACT_APP_API !== undefined) && (process.env.REACT_APP_ENDPOINT_ROOM !==undefined)) {
            url = process.env.REACT_APP_API + process.env.REACT_APP_ENDPOINT_ROOM_DETAIL;
        }
        return fetch(url + roomId)
            .then(response => {
                console.log("Fetch: "+url + roomId);
                const contentType = response.headers.get('content-type');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                if (!contentType || !contentType.includes('application/json')) {
                    throw new TypeError("Oops, we haven't got JSON!");
                }
                return response.json();
            })
    }
    public putTasksByRooms(roomId:string, start: Date, duration: number) {
        let url = "http://localhost";
        if ((process.env.REACT_APP_API !== undefined) && (process.env.REACT_APP_ENDPOINT_ROOM !==undefined)) {
            url = process.env.REACT_APP_API + process.env.REACT_APP_ENDPOINT_ROOM_DETAIL;
        }
        url += roomId+"?" +
            "start=" + start.toISOString() + "&" +
            "duration=" + duration + "&" +
            "room="+roomId;
        return fetch(url + roomId, {
            method: 'PUT'
        }).then(response => {
                console.log("Store: "+url + roomId);
                const contentType = response.headers.get('content-type');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                if (!contentType || !contentType.includes('application/json')) {
                    throw new TypeError("Oops, we haven't got JSON!");
                }
                return response.json();
            })
    }
}