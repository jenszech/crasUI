import * as React from 'react';
import { Component, Fragment } from 'react';
import { UncontrolledTooltip } from 'reactstrap';
import './MetaIcon.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ICustomIconProps } from '../../shared/interface/ICustomIconProps';
import MetaIconHelper from '../../shared/utils/MetaIconHelper';

class MetaIcon extends Component<ICustomIconProps> {
  render(): JSX.Element {
    return (
      <Fragment>
        <span id={this.props.icon}>
          <FontAwesomeIcon icon={MetaIconHelper.getIconClass(this.props.icon)} />
        </span>
        <UncontrolledTooltip placement="bottom" target={this.props.icon}>
          {MetaIconHelper.getToolTyp(this.props.icon)}
        </UncontrolledTooltip>
      </Fragment>
    );
  }
}
// noinspection JSUnusedGlobalSymbols
export default MetaIcon;
