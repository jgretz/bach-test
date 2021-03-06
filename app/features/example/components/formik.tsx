import React from 'react';
import {compose, withCallback} from '@truefit/bach';
import {withFormik, withFormikContext} from '@truefit/bach-formik';
import {FormikProps} from 'formik';

type FormValues = {
  name: string;
  address: string;
  age: number;
};

// inner test
type WithFormContextProps = {
  values: FormValues;
};

const WithFormikContextContent = ({values}: WithFormContextProps) => (
  <div>{JSON.stringify(values)}</div>
);

const WithFormikContext = compose(withFormikContext(['values']))(WithFormikContextContent);

// Form
type Props = {
  yell: () => void;

  handleFormSubmit: () => void;
  formik: FormikProps<FormValues>;
};

const WithFormik = ({formik: {values, handleChange, handleBlur}, handleFormSubmit}: Props) => {
  return (
    <div>
      <h1>Formik</h1>
      <h2>
        <WithFormikContext />
      </h2>
      <input name="name" onChange={handleChange} onBlur={handleBlur} value={values.name} />
      <input name="address" onChange={handleChange} onBlur={handleBlur} value={values.address} />
      <input name="age" onChange={handleChange} onBlur={handleBlur} value={values.age} />

      <button type="submit" onClick={handleFormSubmit}>
        Submit
      </button>
    </div>
  );
};

const yell = () => () => {
  console.log('YEEEEAAAAAAAHAHHAHAH'); // eslint-disable-line
};

const handleFormSubmit = ({formik: {handleSubmit}}: Props) => () => {
  handleSubmit();
};

const formikConfig = ({yell}: Props) => ({
  initialValues: {name: 'John Doe', address: '', age: 0},
  onSubmit: (values: FormValues) => {
    yell();

    console.log(values); // eslint-disable-line
  },
});

export default compose(
  withCallback('yell', yell),

  withFormik(formikConfig),
  withCallback<Props>('handleFormSubmit', handleFormSubmit),
)(WithFormik);
