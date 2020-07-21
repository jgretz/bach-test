/* eslint-disable no-console */
import React, {useState} from 'react';
import {compose, withEffect} from '@truefit/bach';
import {withProps, withHandlers} from '@truefit/bach-recompose';

// Custom hooks
const db = () => {
  return {
    user: 'user-a',
    authorised: true,
  };
};

// const username = (nickname: string) => {
//   return {
//     username: 'William',
//     nickname,
//   };
// };

const useNestedUsername = () => {
  const [getNickname] = useState('Jeff');
  return {
    username: 'Jeffrey',
    nickname: getNickname,
  };
};

const useExternalService = () => {
  console.log('Pinging external service');
};

// Types
interface Props {
  user: string;
  authorised: boolean;
  username: string;
  nickname: string;

  handleIt: () => void;
}

// Component
function App({user, authorised}: Props) {
  const {username, nickname} = useNestedUsername();
  if (authorised) {
    return (
      <div>
        <h1>Hello {username}</h1>
        <h2>Your id is: {user}</h2>
        <h2>Your nickname is: {nickname}</h2>
      </div>
    );
  }
  return null;
}

// Enhancer
const enhance = compose<Props>(
  withProps(db()),
  withProps<Props>({
    username: (props) => props.user,
  }),
  withHandlers<Props>({
    handleIt: (props) => () => {
      console.log(props.user);
    },
  }),
  withEffect(() => {
    useExternalService();
  }, []),
);

// Export
export default enhance(App);
