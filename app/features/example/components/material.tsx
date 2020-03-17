import React from 'react';
import {compose} from '@truefit/bach';
import {withTheme} from '@truefit/bach-material-ui';
import {Theme} from '@material-ui/core';

type Props = {
  theme: Theme;
};

const Example = ({theme}: Props) => (
  <div style={{fontSize: theme.typography.fontSize}}>Hello World</div>
);

export default compose(withTheme())(Example);
