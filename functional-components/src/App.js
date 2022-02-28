import { useState } from "react";
const App = () => {
  const [value, setValue] = useState({ normal: "Nombre", text: "Descripcion" });
  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
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
    </div>
  );
};

export default App;
