/* eslint-disable sort-imports */
import {combineReducers} from 'redux';
import test, {TestState} from './test';

export type ExampleState = {
  test: TestState;
};

export default combineReducers({
  test,
});
