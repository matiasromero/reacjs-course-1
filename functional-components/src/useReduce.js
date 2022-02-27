import { useReducer, useState } from "react";

// const state = { contador: 0 }
// actions = { type: string, payload: any }

const initialState = { counter: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return { counter: state.counter + 1 };
    case "decrease":
      return { counter: state.counter - 1 };
    case "set":
      return { counter: parseInt(action.payload) };
    default:
      return state;
  }
};

const styles = {
  counter: {
    margin: "0 20 px",
  },
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [value, setValue] = useState(0);
  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => dispatch({ type: "decrease" })}> - </button>
      <span style={styles.counter}>Counter: {state.counter}</span>
      <button onClick={() => dispatch({ type: "increase" })}> + </button>
      <button onClick={() => dispatch({ type: "set", payload: value })}>
        Set
      </button>
    </div>
  );
};

export default App;
