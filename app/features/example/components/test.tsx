import React, {useMemo} from 'react';
import {
  compose,
  withState,
  withCallback,
  withEffect,
  withHook,
  withMemo,
  withStaticProps,
} from '@truefit/bach';

import CallbackAndState from './callbackAndState';
import ContextExample from './context';
import ReducerExample from './reducer';
import RefExample from './ref';
import HookExample from './hooks';
import ReduxTest from './redux';
import RecomposeTest from './recompose';
import MaterialTest from './material';
import FormikTest from './formik';

type PublicProps = {
  name: string;
};

type InternalProps = {
  count: number;
  setCount: (c: number) => void;

  handleIncrementClick: () => void;

  oneMore: number;
  greeting: string;
};

type Props = PublicProps & InternalProps;

// layout
const Test = ({name, count, greeting, handleIncrementClick}: Props) => (
  <div>
    <h2>
      {greeting} {name}
    </h2>
    <div>Count: {count}</div>
    <div>
      <button type="button" onClick={handleIncrementClick}>
        Increment
      </button>
    </div>
    <div>
      <CallbackAndState />
    </div>
    <div>
      <ContextExample />
    </div>
    <div>
      <ReducerExample />
    </div>
    <div>
      <RefExample />
    </div>
    <div>
      <HookExample />
    </div>
    <div>
      <ReduxTest />
    </div>
    <div>
      <RecomposeTest />
    </div>
    <div>
      <MaterialTest />
    </div>
    <div>
      <FormikTest />
    </div>
  </div>
);

Test.idea = 'I want to be a real person';

// handler logic
const handleIncrementClick = ({count, setCount}: InternalProps) => () => {
  setCount(count + 1);
};

const printName = ({name}: PublicProps) => {
  // eslint-disable-next-line no-console
  console.log(name);
};

const printCount = ({count}: InternalProps) => {
  // eslint-disable-next-line no-console
  console.log(`Count: ${count}`);
};

const printOneMore = ({oneMore}: InternalProps) => {
  // eslint-disable-next-line no-console
  console.log(`One More: ${oneMore}`);
};

// compose
const ComposedTest = compose<PublicProps>(
  withState<InternalProps, number>('count', 'setCount', 0),
  withCallback<InternalProps>('handleIncrementClick', handleIncrementClick),
  withHook<InternalProps>(useMemo, ({count}: Props) => () => count + 1, 'oneMore'),
  withMemo<InternalProps>('greeting', () => 'Hello'),

  withEffect<PublicProps>(printName, ['name']),
  withEffect<InternalProps>(printCount, ['count']),
  withEffect<InternalProps>(printOneMore, ['oneMore']),

  withStaticProps({
    displayName: 'Fred',
  }),
)(Test);

// eslint-disable-next-line no-console
console.log(ComposedTest.displayName);

// eslint-disable-next-line
console.log((ComposedTest as any).idea);

// consumption example
export default () => <ComposedTest name="Josh" />;
