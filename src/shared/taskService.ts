import {DataService} from "./dataService";
import {RoomAgenda} from "./models/RoomAgenda";
import {Booking} from "./models/Booking";

export class TaskService {
    private roomAgenda:RoomAgenda = new RoomAgenda();
    private dataService = new DataService();

    public loadTasks(roomId:string, callbackFunction:() => void) {
            console.log("TaskService.loadTasks");
             this.dataService.getTasksByRooms(roomId)
                .then(result => {
                    this.roomAgenda = this.parseJson(result);
                    console.log("TaskService.loadTask - loading completed: " + this.roomAgenda.roomName);
                    callbackFunction();
                })
                .catch((error) => console.error(error));
    }
    public storeTasks(roomId:string, start: Date, duration:number, callbackFunction:() => void) {
        console.log("TaskService.storeTasks");
        this.dataService.putTasksByRooms(roomId, start, duration)
            .then(result => {
                console.log("TaskService.storeTask - completed " + result.toString());
                callbackFunction();
            })
            .catch((error) => console.error(error));
    }

    private parseJson(result:RoomAgenda): RoomAgenda {
        let agenda = new RoomAgenda();
        result.appointments.forEach(element => {
            let book = new Booking();
            book.startTime = new Date(element.startTime);
            book.endTime = new Date(element.endTime);
            book.title = element.title;
            book.blocked = element.blocked;
            book.user = element.user;
            agenda.appointments.push(book);
        });
        // @ts-ignore
        //return new Map([...roomsByFloor.entries()].sort());
        return agenda;
    }

    public getTasks() : Array<Booking>{
        if (this.roomAgenda !== undefined) {
            return this.roomAgenda.appointments;
        }
        return new Array<Booking>();
    }

    isNext(appointment:Booking) {
        const now = new Date();
        return (appointment.startTime > now);
    }
    isNow(appointment:Booking) {
        const now = new Date();
        return (appointment.startTime < now) && (appointment.endTime > now);
    }

    public getCurrentAppointment(): Booking|undefined {
        if ((this.roomAgenda.appointments === undefined) || (this.roomAgenda.appointments.length === 0)) {
            return new Booking();
        }
        const next = this.roomAgenda.appointments.filter(this.isNow);
        console.log('TaskService.getCurrentAppointment - Load NowAppointment - Count: ' + this.roomAgenda.appointments.length + ' -> ' + next.length);
        if (next.length > 0) {
            return next[0];
        }
        return undefined;
    }

    public getNextAppointment(): Booking|undefined {
        if ((this.roomAgenda.appointments === undefined) || (this.roomAgenda.appointments.length === 0)) {
            return new Booking();
        }
        const next = this.roomAgenda.appointments.filter(this.isNext);
        console.log('TaskService.getNextAppointment - Load NexAppointment - Count: ' + this.roomAgenda.appointments.length + ' -> ' + next.length);
        if (next.length > 0) {
            return next[0];
        }
        return undefined;
    }
}