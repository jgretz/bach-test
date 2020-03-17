import React, {useState, useMemo, useEffect} from 'react';
import {compose, withHook} from '@truefit/bach';

type Props = {
  count: number;
  setCount: (c: number) => void;

  oneMore: number;
};

const Component = ({count, setCount, oneMore}: Props) => (
  <div>
    <h1>With Hook</h1>
    <h2>Count: {count}</h2>
    <h2>One More: {oneMore}</h2>
    <div>
      <button
        type="button"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        + 1
      </button>
    </div>
  </div>
);

export default compose(
  withHook<Props>(useState, 0, ['count', 'setCount']),
  withHook<Props>(useMemo, ({count}: Props) => () => count + 1, 'oneMore'),

  withHook<Props>(useEffect, ({count}: Props) => () => {
    console.log(`Count ${count}`); // eslint-disable-line
  }),
)(Component);
