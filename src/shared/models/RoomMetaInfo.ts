import {AusstattungType} from './AusstattungType';

export class RoomMetaInfo {
    id: string = "";
    name: string = "";
    room: string = "";
    tel: string = "";
    link: string = "";
    etage: string = "";
    plaetze: number = 0;
    description: string ="";
    ausstattung: Array<AusstattungType> = new Array<AusstattungType>();
}
