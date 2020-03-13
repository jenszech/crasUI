import {Room} from "../models/Room";
import {Booking} from "../models/Booking";
import history from "../history";

export class RoutingHelper {
    public static showBookingSelection(room : Room, appointment: Booking, isBookable: boolean) {
        if (isBookable) {
            console.log("RoutingHelper.showBookingSelection - Open BookingSelection: " + room.id);
            history.push({
                pathname: '/booking',
                search: '',
                state: {
                    room: room,
                    appointment: appointment
                }
            })
        }
    }

    public static showRoomOverview(room : Room) {
        console.log("RoutingHelper.showRoomOverview - Open Room: "+room.id);
        history.push({
            pathname: '/overview',
            search: '',
            state: { room: room }
        })
    };

    public static showRoomDetail(room : Room) {
        console.log("RoutingHelper.showRoomDetail - Open RoomTasks: "+room.id);
        history.push({
            pathname: '/detail',
            search: '',
            state: { room: room }
        })
    }

    public static showRoomInfo(room : Room) {
        console.log("RoutingHelper.showRoomMeta - Open RoomInfo: "+room.id);
        history.push({
            pathname: '/info',
            search: '',
            state: { room: room }
        })
    }
}