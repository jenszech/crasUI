import {AusstattungType} from './AusstattungType';

export class RoomMetaInfo {
    id: string = "";
    name: string = "";
    room: string = "";
    tel: string = "";
    etage: string = "";
    plaetze: number = 0;
    ausstattung: Array<AusstattungType> = new Array<AusstattungType>();
}
