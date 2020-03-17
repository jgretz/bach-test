import React, {Dispatch} from 'react';
import {compose, withReducer} from '@truefit/bach';

enum ActionType {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
}

type Action = {type: ActionType};

type Props = {
  count: number;
  countDispatch: Dispatch<Action>;
};

const Component = ({count, countDispatch}: Props) => (
  <div>
    <h1>With Reducer</h1>
    <div>
      <h2>Count: {count}</h2>
      <button type="button" onClick={() => countDispatch({type: ActionType.INCREMENT})}>
        Increment
      </button>
      <button type="button" onClick={() => countDispatch({type: ActionType.DECREMENT})}>
        Decrement
      </button>
    </div>
  </div>
);

const reducer = (state: number, action: Action) => {
  switch (action.type) {
    case ActionType.INCREMENT:
      return state + 1;

    case ActionType.DECREMENT:
      return state - 1;

    default:
      return state;
  }
};

export default compose(withReducer<Props, number, Action>('count', reducer, 0))(Component);
