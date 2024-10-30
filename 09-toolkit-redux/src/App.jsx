import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  increment,
  decrement,
  incrementByAmount,
} from "./store/slices/counter";

function App() {
  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <p>Count is: {counter}</p>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <p></p>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <p></p>
        <button onClick={() => dispatch(incrementByAmount(2))}>
          Increment by 2
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
