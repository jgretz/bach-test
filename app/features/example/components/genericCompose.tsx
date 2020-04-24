import React from 'react';
import {compose} from '@truefit/bach';

type Props<T> = {
  message: T;
};

function Generic<T>({message}: Props<T>) {
  const actualMessage = typeof message === 'string' ? 'string' : 'not string';

  return (
    <div>
      <div>{actualMessage}</div>
    </div>
  );
}

function Composed<T>(props: Props<T>) {
  const Component = compose<T, Props<T>>()(Generic);

  return <Component {...props} />;
}

export default () => <Composed<string> message="Josh" />;
