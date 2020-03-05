import {environment} from '../environments/environment';

export class DataService {
    public getRooms() {
        return fetch(environment.apiURL + environment.roomsEndpoint)
            .then((response) => {
                console.log("Fetch: "+environment.apiURL + environment.roomsEndpoint);
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

    // Error handling
    /*
    private handleError(error) {
        let errorMessage;
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        } else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return throwError(errorMessage);
    }*/
}