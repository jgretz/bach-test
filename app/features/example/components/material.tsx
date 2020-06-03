import React from 'react';
import {compose} from '@truefit/bach';
import {withTheme, withStyles, withMediaQuery} from '@truefit/bach-material-ui';
import {Theme} from '@material-ui/core';

type Props = {
  classes: {
    center: string;
  };
  theme: Theme;

  isMediumUp: boolean;
};

const Example = ({classes, theme}: Props) => (
  <div className={classes.center}>
    <div style={{fontSize: theme.typography.fontSize}}>Hello Material</div>
  </div>
);

const isMediumUp = (theme: Theme) => theme.breakpoints.up('md');

const styles = {
  center: ({isMediumUp}: Props) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    color: isMediumUp ? '#ff0000' : '#00ff00',
  }),
};

export default compose(
  withTheme(),

  withMediaQuery('isMediumUp', isMediumUp),
  withStyles(styles),
)(Example);
