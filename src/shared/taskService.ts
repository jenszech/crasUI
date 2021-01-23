import DataService from './dataService';
import RoomAgenda from './models/RoomAgenda';
import Booking from './models/Booking';

export default class TaskService {
  private roomAgenda: RoomAgenda = new RoomAgenda();

  public loadTasks(roomId: string, callbackFunction: () => void): void {
    console.log('TaskService.loadTasks');
    DataService.getTasksByRooms(roomId)
      .then((result) => {
        this.roomAgenda = TaskService.parseJson(result);
        console.log(`TaskService.loadTask - loading completed: ${this.roomAgenda.roomName}`);
        callbackFunction();
      })
      .catch((error) => console.error(error));
  }
  public static storeTasks(roomId: string, start: Date, duration: number, callbackFunction: () => void): void {
    console.log('TaskService.storeTasks');
    DataService.putTasksByRooms(roomId, start, duration)
      .then((result) => {
        console.log(`TaskService.storeTask - completed ${result.toString()}`);
        callbackFunction();
      })
      .catch((error) => console.error(error));
  }

  private static parseJson(result: RoomAgenda): RoomAgenda {
    const agenda = new RoomAgenda();
    result.appointments.forEach((element) => {
      const book = new Booking();
      book.startTime = new Date(element.startTime);
      book.endTime = new Date(element.endTime);
      book.title = element.title;
      book.blocked = element.blocked;
      book.user = element.user;
      agenda.appointments.push(book);
    });
    return agenda;
  }

  public getTasks(): Array<Booking> {
    if (this.roomAgenda !== undefined) {
      return this.roomAgenda.appointments;
    }
    return new Array<Booking>();
  }

  static isNext(appointment: Booking): boolean {
    const now = new Date();
    return appointment.startTime > now;
  }
  static isNow(appointment: Booking): boolean {
    const now = new Date();
    return appointment.startTime < now && appointment.endTime > now;
  }

  public getCurrentAppointment(): Booking | undefined {
    if (this.roomAgenda.appointments === undefined || this.roomAgenda.appointments.length === 0) {
      return new Booking();
    }
    const next = this.roomAgenda.appointments.filter(TaskService.isNow);
    console.log(
      `TaskService.getCurrentAppointment - Load NowAppointment - Count: ${this.roomAgenda.appointments.length} -> ${next.length}`,
    );
    if (next.length > 0) {
      return next[0];
    }
    return undefined;
  }

  public getNextAppointment(): Booking | undefined {
    if (this.roomAgenda.appointments === undefined || this.roomAgenda.appointments.length === 0) {
      return new Booking();
    }
    const next = this.roomAgenda.appointments.filter(TaskService.isNext);
    console.log(
      `TaskService.getNextAppointment - Load NexAppointment - Count: ${this.roomAgenda.appointments.length} -> ${next.length}`,
    );
    if (next.length > 0) {
      return next[0];
    }
    return undefined;
  }
}
