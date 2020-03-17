import React from 'react';
import {compose, withState, withCallback} from '@truefit/bach';

type Props = {
  count: number;
  setCount: (n: number) => void;

  alterCount: (n: number) => () => void;
};

const Component = ({count, alterCount}: Props) => (
  <div>
    <h1>With Callback And State</h1>
    <div>
      <h2>Count: {count}</h2>
      <button type="button" onClick={alterCount(1)}>
        Increment
      </button>
      <button type="button" onClick={alterCount(-1)}>
        Decrement
      </button>
    </div>
  </div>
);

export default compose(
  withState<Props, number>('count', 'setCount', () => 0),

  withCallback<Props>('alterCount', ({count, setCount}: Props) => (delta: number) => () => {
    setCount(count + delta);
  }),
)(Component);
