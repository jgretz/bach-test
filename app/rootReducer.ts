/* eslint-disable sort-imports */
/* eslint-disable camelcase */
/* eslint-disable object-shorthand */
import {combineReducers} from 'redux';

import example, {ExampleState} from './features/example/reducers';

export type ApplicationState = {
  features: {
    example: ExampleState;
  };
};

const createRootReducer = () =>
  combineReducers({
    features: combineReducers({
      example: example,
    }),
  });

export default createRootReducer;
