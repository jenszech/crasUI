import * as React from 'react';
import { Component, Fragment } from 'react';
import './MetaIconDetail.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ICustomIconProps } from '../../shared/interface/ICustomIconProps';
import MetaIconHelper from '../../shared/utils/MetaIconHelper';

class MetaIconDetail extends Component<ICustomIconProps> {
  render(): JSX.Element {
    return (
      <Fragment>
        <div className="metainfo-detail">
          <div className="icon">
            <FontAwesomeIcon icon={MetaIconHelper.getIconClass(this.props.icon)} />
          </div>
          <div className="icon-desc">{MetaIconHelper.getToolTyp(this.props.icon)}</div>
        </div>
      </Fragment>
    );
  }
}
// noinspection JSUnusedGlobalSymbols
export default MetaIconDetail;
