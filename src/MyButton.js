import React, { useContext } from 'react';
import { CountContext } from './CountContext';

function MyButton({action}) {
  const { state, dispatch } = useContext(CountContext);

  return (
    <button onClick={() => dispatch({ type: action })}>
      Clicked action {action} {state.count} times
    </button>
  );
}

export default MyButton;

