import { useState, useEffect } from "react";

// rules for hooks:
//  can't be called inside a loop (if, while, else, foreach)
//  only called in two steps (components / custom hooks)
const styles = {
  counter: {
    margin: "0 20 px",
  },
};

const useCounter = (inicial) => {
  const [counter, setCounter] = useState(inicial);
  const increase = () => {
    setCounter(counter + 1);
  };
  const decrease = () => {
    setCounter(counter - 1);
  };
  return [counter, increase, decrease];
};

const App = () => {
  const [counter, increase, decrease] = useCounter(0);
  useEffect(() => {
    document.title = counter;
    console.log("effect!");
  }, [counter]);

  return (
    <div>
      <button onClick={decrease}> - </button>
      <span style={styles.counter}>Counter: {counter}</span>
      <button onClick={increase}> + </button>
    </div>
  );
};

export default App;