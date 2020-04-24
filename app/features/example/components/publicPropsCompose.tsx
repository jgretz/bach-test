import React from 'react';
import {compose} from '@truefit/bach';

type Props = {
  message: string;
};

const Display = ({message}: Props) => (
  <div>
    <div>{message}</div>
  </div>
);

export default compose<Props>()(Display);
