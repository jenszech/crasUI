import Room from '../models/Room';
import Booking from '../models/Booking';
import history from '../history';

export default class RoutingHelper {
  public static showBookingSelection(room: Room, appointment: Booking, isBookable: boolean): void {
    if (isBookable) {
      console.log(`RoutingHelper.showBookingSelection - Open BookingSelection: ${room.id}`);
      history.push({
        pathname: '/booking',
        search: '',
        state: {
          room,
          appointment,
        },
      });
    }
  }

  public static showRoomOverview(room: Room): void {
    console.log(`RoutingHelper.showRoomOverview - Open Room: ${room.id}`);
    history.push({
      pathname: '/overview',
      search: '',
      state: { room },
    });
  }

  public static showRoomDetail(room: Room): void {
    console.log(`RoutingHelper.showRoomDetail - Open RoomTasks: ${room.id}`);
    history.push({
      pathname: '/detail',
      search: '',
      state: { room },
    });
  }

  public static showRoomInfo(room: Room): void {
    console.log(`RoutingHelper.showRoomMeta - Open RoomInfo: ${room.id}`);
    history.push({
      pathname: '/info',
      search: '',
      state: { room },
    });
  }
}
