import React, {MutableRefObject} from 'react';
import {compose, withRef, withCallback} from '@truefit/bach';

type Props = {
  textBox1: MutableRefObject<HTMLInputElement>;
  textBox2: MutableRefObject<HTMLInputElement>;

  focus1: () => void;
  focus2: () => void;
};

const Component = ({textBox1, textBox2, focus1, focus2}: Props) => (
  <div>
    <h1>With Ref</h1>
    <div>
      <input ref={textBox1} />
      <button type="button" onClick={focus1}>
        Focus Me
      </button>
    </div>
    <div>
      <input ref={textBox2} />
      <button type="button" onClick={focus2}>
        Focus Me
      </button>
    </div>
  </div>
);

export default compose(
  withRef('textBox1', null),
  withRef('textBox2', null),

  withCallback<Props>('focus1', ({textBox1}) => () => {
    textBox1.current.focus();
  }),
  withCallback<Props>('focus2', ({textBox2}) => () => {
    textBox2.current.focus();
  }),
)(Component);
