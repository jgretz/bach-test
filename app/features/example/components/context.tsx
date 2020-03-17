import React from 'react';
import {compose, withContext} from '@truefit/bach';

type Props = {
  message: string;
};

type Context = {
  message: string;
};

const context = React.createContext<Context>({message: 'Hello There'});

const Component = ({message}: Props) => {
  return (
    <div>
      <h1>With Context</h1>
      <div>
        <h2>{message}</h2>
      </div>
    </div>
  );
};

export default compose(withContext<Context>(['message'], context))(Component);
