/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import * as React from 'react';
import {Component, Fragment} from 'react';

import {UncontrolledTooltip,} from 'reactstrap';
import './MetaIcon.scss';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {
    faAppleAlt,
    faCheckSquare,
    faTv,
    faClipboardList,
    faHdd,
    faPencilAlt,
    faMicrophone,
    faPhone,
    faChalkboard,
    faStop,
    faThumbtack,
    faVideo,
    faQuestionCircle
} from '@fortawesome/free-solid-svg-icons'
import { IconName } from '@fortawesome/fontawesome-svg-core'
import {AusstattungType} from "../../shared/models/AusstattungType";

library.add(faCheckSquare, faAppleAlt, faThumbtack, faStop, faVideo, faMicrophone, faClipboardList,
    faChalkboard, faTv, faHdd, faPhone, faPencilAlt, faQuestionCircle);

interface CustomIconProps {
    icon: AusstattungType;
}

class MetaIcon extends Component<CustomIconProps> {
    render() {
        // @ts-ignore
        return (
            <Fragment>
                <span id={this.props.icon}><FontAwesomeIcon icon={this.getIconClass(this.props.icon)}/></span>
                <UncontrolledTooltip placement="bottom" target={this.props.icon}>{this.getToolTyp(this.props.icon)}</UncontrolledTooltip>
            </Fragment>
        );
    }

    public getIconClass(icon: AusstattungType): IconName {
        switch (icon) {
            case AusstattungType.typ_appleTv:
                return faAppleAlt.iconName;
            case AusstattungType.typ_camera:
                return faVideo.iconName;
            case AusstattungType.typ_mobVK:
                return faStop.iconName;
            case AusstattungType.typ_polycom:
                return faPhone.iconName;
            case AusstattungType.typ_mobPolycom:
                return faMicrophone.iconName;
            case AusstattungType.typ_pinnwand:
                return faThumbtack.iconName;
            case AusstattungType.typ_flipchart:
                return faClipboardList.iconName;
            case AusstattungType.typ_whiteboard:
                return faChalkboard.iconName;
            case AusstattungType.typ_tv:
                return faTv.iconName;
            case AusstattungType.typ_beamer:
                return faHdd.iconName;
            case AusstattungType.typ_desktop:
                return faPencilAlt.iconName;
            default:
                return faQuestionCircle.iconName;
        }
    }

    public getToolTyp(icon: AusstattungType): string {
        switch (icon) {
            case AusstattungType.typ_appleTv:
                return 'Apple TV';
            case AusstattungType.typ_camera:
                return 'Video Camera';
            case AusstattungType.typ_mobVK:
                return 'Mobile Videokonferenz Anlage';
            case AusstattungType.typ_polycom:
                return 'Polycom Videokonferenz';
            case AusstattungType.typ_mobPolycom:
                return 'Polycom Videokonferenz (mobil)';
            case AusstattungType.typ_pinnwand:
                return 'Pinnwand';
            case AusstattungType.typ_flipchart:
                return 'Flipchart';
            case AusstattungType.typ_whiteboard:
                return 'Whiteboard';
            case AusstattungType.typ_tv:
                return 'Monitor';
            case AusstattungType.typ_beamer:
                return 'Beamer';
            case AusstattungType.typ_desktop:
                return 'Schreibtisch';
            default:
                return '';
        }
    }
}
// noinspection JSUnusedGlobalSymbols
export default MetaIcon;