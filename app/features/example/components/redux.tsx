import React from 'react';
import {compose} from '@truefit/bach';
import {withSelector} from '@truefit/bach-redux';
import {ApplicationState} from '../../../rootReducer';

const todoSelector = (state: ApplicationState) => state.features.example.test;

type Props = {
  todos: string[];
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

export default compose(withSelector<Props, string[]>('todos', todoSelector))(WithSelector);
