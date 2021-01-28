export default class Booking {
  startTime: Date = new Date();
  endTime: Date = new Date();
  title = '';
  user = '';
  blocked = false;

  public isBookable(): boolean {
    return !this.blocked && new Date().getTime() < this.endTime.getTime();
  }

  updateByJson(json: any) {
    this.startTime = new Date(json.startTime);
    this.endTime = new Date(json.endTime);
    this.title = json.title;
    this.user = json.user;
    this.blocked = json.blocked;
  }
}
