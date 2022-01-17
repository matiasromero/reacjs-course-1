import { Component } from "react";
import Products from "./components/Products";

class App extends Component {
  state = {
    products: [
      {
        name: "Apple",
        price: 200.0,
        img: "https://images.freeimages.com/images/large-previews/e93/apple-1524168.jpg",
      },
      {
        name: "Carrot",
        price: 80.0,
        img: "https://images.freeimages.com/images/large-previews/4d3/carrots-1326182.jpg",
      },
      {
        name: "Tomato",
        price: 220.0,
        img: "https://images.freeimages.com/images/large-previews/b36/tomato-1326722.jpg",
      },
    ],
  };
  render() {
    return (
      <div>
        <Products
          addToCart={() => console.log("nothing")}
          products={this.state.products}
        />
      </div>
    );
  }
}

export default App;
