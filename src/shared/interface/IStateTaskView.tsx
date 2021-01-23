import Booking from '../models/Booking';

export default interface IStateTaskView {
  current?: Booking;
  next?: Booking;
}
