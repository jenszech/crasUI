import * as React from 'react';
import { Component, Fragment } from 'react';
import { UncontrolledTooltip } from 'reactstrap';
import './MetaIcon.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ICustomIconProps } from '../../shared/interface/ICustomIconProps';
import MetaIconHelper from '../../shared/utils/MetaIconHelper';

class MetaIcon extends Component<ICustomIconProps> {
  render(): JSX.Element {
    const { icon } = this.props;
    return (
      <Fragment>
        <span id={icon}>
          <FontAwesomeIcon icon={MetaIconHelper.getIconClass(icon)} />
        </span>
        <UncontrolledTooltip placement="bottom" target={icon}>
          {MetaIconHelper.getToolTyp(icon)}
        </UncontrolledTooltip>
      </Fragment>
    );
  }
}
// noinspection JSUnusedGlobalSymbols
export default MetaIcon;
