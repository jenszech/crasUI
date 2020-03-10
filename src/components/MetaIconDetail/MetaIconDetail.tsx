/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import * as React from 'react';
import {Component, Fragment} from 'react';

import './MetaIconDetail.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {ICustomIconProps} from "../../shared/interface/ICustomIconProps";
import {MetaIconHelper} from "../../shared/MetaIconHelper";

class MetaIconDetail extends Component<ICustomIconProps> {
    render() {
        return (
            <Fragment>
                <div className="metainfo-detail">
                    <div className="icon">
                        <FontAwesomeIcon icon={MetaIconHelper.getIconClass(this.props.icon)}/>
                    </div>
                    <div className="icon-desc">
                        {MetaIconHelper.getToolTyp(this.props.icon)}
                    </div>
                </div>
            </Fragment>
        );
    }
}
// noinspection JSUnusedGlobalSymbols
export default MetaIconDetail;