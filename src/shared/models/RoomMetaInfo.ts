import AusstattungType from './AusstattungType';

export default class RoomMetaInfo {
  id = '';
  name = '';
  room = '';
  tel = '';
  link = '';
  etage = '';
  plaetze = 0;
  description = '';
  ausstattung: Array<AusstattungType> = new Array<AusstattungType>();
}
