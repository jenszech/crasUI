import Booking from './Booking';

export default class RoomAgenda {
  roomName = '';
  appointments: Array<Booking> = new Array<Booking>();

  updateByJson(json: any): void {
    this.roomName = json.roomName;
    this.appointments = new Array<Booking>();
    // eslint-disable-next-line no-restricted-syntax
    for (const aJson of json.appointments) {
      const appointment = new Booking();
      appointment.updateByJson(aJson);
      this.appointments.push(appointment);
    }
  }
}
