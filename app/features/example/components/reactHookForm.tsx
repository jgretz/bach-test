import React from 'react';
import {compose, withCallback} from '@truefit/bach';
import {withForm, UseFormReturn} from '@truefit/bach-react-hook-form';

type FormValues = {
  name: string;
  address: string;
  age: number;
};

type PublicProps = {
  age?: number;
};

type InternalProps = {
  formContext: UseFormReturn<FormValues>;
  onSubmit: (values: FormValues) => void;
};

type Props = PublicProps & InternalProps;

const WithForm = ({formContext: {register, handleSubmit}, onSubmit}: Props) => (
  <div>
    <h1>React Hook Form</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name')} />
      <input {...register('address')} />
      <input {...register('age')} />

      <button type="submit">Submit</button>
    </form>
  </div>
);

const onSubmit = () => (values: FormValues) => {
  console.log(values);
};

const getDefaultValues = ({age}: PublicProps) => ({
  defaultValues: {name: 'John Doe', address: '', age: age || 10},
});

export default compose<PublicProps>(
  withCallback('onSubmit', onSubmit),
  withForm(getDefaultValues),
)(WithForm);
