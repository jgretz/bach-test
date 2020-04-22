import React from 'react';
import {compose, withCallback} from '@truefit/bach';
import {withFormik} from '@truefit/bach-formik';
import {FormikProps} from 'formik';

type FormValues = {
  name: string;
  address: string;
  age: number;
};

type Props = {
  handleFormSubmit: () => void;
  formik: FormikProps<FormValues>;
};

const WithFormik = ({formik: {values, handleChange, handleBlur}, handleFormSubmit}: Props) => (
  <div>
    <h1>Formik</h1>
    <input name="name" onChange={handleChange} onBlur={handleBlur} value={values.name} />
    <input name="address" onChange={handleChange} onBlur={handleBlur} value={values.address} />
    <input name="age" onChange={handleChange} onBlur={handleBlur} value={values.age} />

    <button type="submit" onClick={handleFormSubmit}>
      Submit
    </button>
  </div>
);

export default compose(
  withFormik({
    initialValues: {name: 'John Doe', address: '', age: 0},
    onSubmit: (values: FormValues) => {
      console.log(values); // eslint-disable-line
    },
  }),

  // this is needed to handle the type disparity between formik and onClick
  withCallback<Props>('handleFormSubmit', ({formik: {handleSubmit}}: Props) => () => {
    handleSubmit();
  }),
)(WithFormik);
