import React, { useContext } from 'react';
import CountContext from './CountContext';

function MyButton() {
  const { count, handleClick } = useContext(CountContext);

  return (
    <button onClick={handleClick}>Clicked {count} times</button>
  );
}

export default MyButton;