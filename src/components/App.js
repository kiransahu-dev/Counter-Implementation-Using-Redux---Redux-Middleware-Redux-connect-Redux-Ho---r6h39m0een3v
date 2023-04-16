import React from 'react';
import store from '../reducers';
import { increment, decrement } from '../actions/action';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const count = useSelector((state) => state);
  // console.log(JSON.stringify(count));
  const dispatch = useDispatch();

  return (
    <div id='main'>
      <div data-testid='counter'>{JSON.stringify(count)}</div>
      <br />
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
