const MyComponent = ({ myProp }) => {
  return <div>Nombre: {myProp}</div>;
};

const App = () => {
  return <MyComponent myProp={"hola"} />;
};

export default App;
