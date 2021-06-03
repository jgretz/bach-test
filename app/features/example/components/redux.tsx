import React from 'react';
import {compose, withState} from '@truefit/bach';
import {withSelector} from '@truefit/bach-redux';
import {ApplicationState} from '../../../rootReducer';

const todoSelector = (state: ApplicationState) => state.features.example.test;

type Props = {
  todos: string[];
  foo: number;
};

const WithSelector = ({todos}: Props) => (
  <div>
    <h1>withSelector</h1>
    <ul>
      {todos.map((todo) => (
        <li key={todo}>{todo}</li>
      ))}
    </ul>
  </div>
);

export default compose(
  withState('foo', 'setFoo', 0),
  withSelector<Props, string[]>('todos', todoSelector, ['foo']),
)(WithSelector);
