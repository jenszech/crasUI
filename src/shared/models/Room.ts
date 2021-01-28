import RoomMetaInfo from './RoomMetaInfo';

export default class Room {
  id = '';
  name = '';
  meta: RoomMetaInfo = new RoomMetaInfo();

  updateByJson(json: any): void {
    this.id = json.id;
    this.name = json.name;
    this.meta.updateByJson(json.meta);
  }
}
