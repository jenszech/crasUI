export class Booking {
    startTime: Date = new Date();
    endTime: Date = new Date();
    title: string = "";
    user: string= "";
    blocked: boolean = false;

    public isBookable():boolean {
        return ((!this.blocked) &&  (new Date().getTime() < this.endTime.getTime()))
    }
}
