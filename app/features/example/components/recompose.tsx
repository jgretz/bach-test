import React from 'react';
import {compose, withState, withCallback} from '@truefit/bach';
import {memo} from '@truefit/bach-recompose';

type MemoProps = {
  count: number;
};

const Memo = compose<MemoProps>(
  memo<MemoProps>((prevProps, nextProps) => {
    return nextProps.count % 2 === 0;
  }),
)(({count}: MemoProps) => (
  <>
    <h1>Memo</h1>
    <h2>{count}</h2>
  </>
));

type WrapperProps = {
  count: number;
  setCount: (n: number) => void;

  increment: () => void;
};

export default compose(
  withState<WrapperProps, number>('count', 'setCount', 0),
  withCallback<WrapperProps>('increment', ({count, setCount}) => () => {
    setCount(count + 1);
  }),
)(({count, increment}: WrapperProps) => (
  <div>
    <Memo count={count} />
    <button type="button" onClick={increment}>
      Increment
    </button>
  </div>
));
