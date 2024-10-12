import { createContext, useReducer } from 'react';

const CountContext = createContext();

const initialState = { count: 0 };

function countReducer(state, action) {
  switch (action.type) {
    case 'decrement':
      return { count: state.count - 1 };
    case 'increment':
      return { count: state.count + 1 };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

function CountProvider({ children }) {
  const [state, dispatch] = useReducer(countReducer, initialState);

  const value = { state, dispatch };
  return (
    <CountContext.Provider value={value}>
      {children}
    </CountContext.Provider>
  );
}

export { CountContext, CountProvider };