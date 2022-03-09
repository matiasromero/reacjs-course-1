import { useState } from "react";
const App = () => {
  const [value, setValue] = useState({
    normal: "Nombre",
    text: "Descripcion",
    select: "",
    check: false,
    state: "sad",
  });
  const handleChange = ({ target }) => {
    setValue((state) => ({
      ...state,
      [target.name]: target.type === "checkbox" ? target.checked : target.value,
    }));
  };
  console.log(value);
  return (
    <div>
      {value.length < 5 ? <span>longitud mínima de 5</span> : null}
      <input
        type="text"
        name="normal"
        value={value.normal}
        onChange={handleChange}
      />
      <textarea name="text" onChange={handleChange} value={value.text} />

      <select value={value.select} name="select" onChange={handleChange}>
        <option value="">-- Select --</option>
        <option value="happy">Happy</option>
        <option value="sad">Sad</option>
        <option value="angry">Angry</option>
      </select>

      <input
        type="checkbox"
        name="check"
        onChange={handleChange}
        checked={value.check}
      />

      <div>
        <label>Type:</label>
        <input
          name="state"
          type="radio"
          value="happy"
          onChange={handleChange}
          checked={value.state === "happy"}
        />{" "}
        Happy
        <input
          name="state"
          type="radio"
          value="sad"
          onChange={handleChange}
          checked={value.state === "sad"}
        />{" "}
        Sad
        <input
          name="state"
          type="radio"
          value="angry"
          onChange={handleChange}
          checked={value.state === "angry"}
        />{" "}
        Angry
      </div>
    </div>
  );
};

export default App;
