import { useState } from "react";

// rules for hooks:
//  can't be called inside a loop (if, while, else, foreach)
//  only called in two steps (components / custom hooks)
const styles = {
  counter: {
    margin: "0 20 px",
  },
};
const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <button onClick={() => setCounter(counter - 1)}> - </button>
      <span style={styles.counter}>Counter: {counter}</span>
      <button onClick={() => setCounter(counter + 1)}> + </button>
    </div>
  );
};

export default App;
