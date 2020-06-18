/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect, useCallback, ChangeEvent} from 'react';
import {compose, withState, withEffect, withCallback} from '@truefit/bach';
import {parseInt} from 'lodash';

// form
type FormProps<T extends string | number> = {
  value: T;
  onValueChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

function Generic<T extends string | number>({value, onValueChange}: FormProps<T>) {
  const typeMessage =
    typeof value === 'string' ? 'Supposed to be a string' : 'Supposed to not be a number';

  return (
    <div>
      <div>
        <input type="text" value={value as string} onChange={onValueChange} />
      </div>
      <div>{typeMessage}</div>
    </div>
  );
}

// Wrappers
type WrapperProps<T extends string | number> = {
  initialValue: T;
};

type InternalProps<T extends string | number> = {
  initialValue: T;
  setValue: (value: T) => void;
};

type Props<T extends string | number> = FormProps<T> & InternalProps<T>;

const handleOnValueChange = <T extends string | number>({value, setValue}: Props<T>) => (
  event: ChangeEvent<HTMLInputElement>,
) => {
  if (typeof value === 'string') {
    setValue(event.target.value as T);
  } else {
    setValue(parseInt(event.target.value, 10) as T);
  }

  console.log('Input Change: ', event.target.value);
};

function Hooked<T extends string | number>({initialValue, ...props}: WrapperProps<T>) {
  const [value, setValue] = useState(initialValue);
  const onValueChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    if (typeof value === 'string') {
      setValue(event.target.value as T);
    } else {
      setValue(parseInt(event.target.value, 10) as T);
    }

    console.log('Hooked: Text Change: ', event.target.value);
  }, []);

  useEffect(() => {
    console.log('Hooked: Initial Value = ', value);
  }, [initialValue]);

  return <Generic {...props} value={value} onValueChange={onValueChange} />;
}

function Composed<T extends string | number>({initialValue, ...props}: WrapperProps<T>) {
  const Component = compose<T, WrapperProps<T>>(
    withState('value', 'setValue', initialValue),
    withCallback<Props<T>>('onValueChange', handleOnValueChange),

    withEffect(({value}: FormProps<T>) => {
      console.log('Compose: Initial Value = ', value);
    }, []),
  )(Generic);

  return <Component {...props} initialValue={initialValue} />;
}

export default () => <Composed<string> initialValue="Josh" />;
