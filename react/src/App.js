import { Component } from "react";

class Button extends Component {
  state = {};
  constructor(props) {
    super(props);
    console.log(
      "🚀 ~ file: App.js ~ line 6 ~ Button ~ constructor ~ props",
      props
    );
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate", prevProps, prevState);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount", this.props, this.state);
  }

  render() {
    console.log("executing render method");
    return <button onClick={() => this.setState({ prop: 1 })}>Enviar</button>;
  }
}

class App extends Component {
  state = { valor: 3 };
  render() {
    console.log("🚀 ~ file: App.js ~ line 4 ~ App ~ state", this.state);
    return (
      <div>
        <p>Hola Mundo</p>
        {this.state.valor === 3 ? <Button chanchito="feliz" /> : null}
        <button
          className={`${this.state.valor}`}
          onClick={() => this.setState({ valor: 2 })}
        >
          Enviar en App
        </button>
      </div>
    );
  }
}

export default App;
