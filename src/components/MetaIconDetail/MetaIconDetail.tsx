import * as React from 'react';
import { Component, Fragment } from 'react';
import './MetaIconDetail.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ICustomIconProps } from '../../shared/interface/ICustomIconProps';
import MetaIconHelper from '../../shared/utils/MetaIconHelper';

class MetaIconDetail extends Component<ICustomIconProps> {
  render(): JSX.Element {
    const { icon } = this.props;
    return (
      <Fragment>
        <div className="metainfo-detail">
          <div className="icon">
            <FontAwesomeIcon icon={MetaIconHelper.getIconClass(icon)} />
          </div>
          <div className="icon-desc">{MetaIconHelper.getToolTyp(icon)}</div>
        </div>
      </Fragment>
    );
  }
}
// noinspection JSUnusedGlobalSymbols
export default MetaIconDetail;
