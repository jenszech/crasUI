import Room from '../models/Room';
import Booking from '../models/Booking';

export interface ICustomRoomBookProps {
  room: Room;
  appointment: Booking;
}
