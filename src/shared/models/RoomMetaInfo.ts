import AusstattungType from './AusstattungType';

export default class RoomMetaInfo {
  id = '';
  room = '';
  name = '';
  tel = '';
  link = '';
  etage = '';
  plaetze = 0;
  description = '';
  ausstattung: Array<AusstattungType> = new Array<AusstattungType>();

  updateByJson(json: any) {
    this.id = json.id;
    this.room = json.room;
    this.name = json.name;
    this.tel = json.tel;
    this.link = json.link;
    this.etage = json.etage;
    this.plaetze = json.plaetze;
    this.description = json.description;
    this.ausstattung = new Array<AusstattungType>();
    // eslint-disable-next-line no-restricted-syntax
    for (const aType of json.ausstattung) {
      const ausstattung = RoomMetaInfo.getType(aType);
      this.ausstattung.push(ausstattung);
    }
  }

  private static getType(aType: string): AusstattungType {
    switch (aType) {
      case 'typ_mobVK':
        return AusstattungType.typ_mobVK;
        break;
      case 'typ_whiteboard':
        return AusstattungType.typ_whiteboard;
        break;
      case 'typ_mobPolycom':
        return AusstattungType.typ_mobPolycom;
        break;
      case 'typ_flipchart':
        return AusstattungType.typ_flipchart;
        break;
      case 'typ_appleTv':
        return AusstattungType.typ_appleTv;
        break;
      case 'typ_pinnwand':
        return AusstattungType.typ_pinnwand;
        break;
      case 'typ_tv':
        return AusstattungType.typ_tv;
        break;
      case 'typ_camera':
        return AusstattungType.typ_camera;
        break;
      case 'typ_polycom':
        return AusstattungType.typ_polycom;
        break;
      case 'typ_desktop':
        return AusstattungType.typ_desktop;
        break;
      case 'typ_beamer':
        return AusstattungType.typ_beamer;
        break;
      default:
        return AusstattungType.unkown;
    }
  }
}
