export default class Booking {
  startTime: Date = new Date();
  endTime: Date = new Date();
  title = '';
  user = '';
  blocked = false;

  public isBookable(): boolean {
    return !this.blocked && new Date().getTime() < this.endTime.getTime();
  }
}
