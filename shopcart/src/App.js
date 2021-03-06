import { Component } from "react";
import Products from "./components/Products";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Title from "./components/Title";

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
    cart: [],
    cartVisible: false,
  };

  addToCart = (product) => {
    const { cart } = this.state;
    if (cart.find((x) => x.name === product.name)) {
      const newCart = cart.map((x) =>
        x.name === product.name
          ? {
              ...x,
              quantity: x.quantity + 1,
            }
          : x
      );
      return this.setState({ cart: newCart });
    }
    return this.setState({
      cart: this.state.cart.concat({ ...product, quantity: 1 }),
    });
  };

  showCart = () => {
    if (!this.state.cart.length) return;
    this.setState({ cartVisible: !this.state.cartVisible });
  };

  render() {
    const quantity = this.state.cart.reduce((a, b) => {
      return a + b.quantity;
    }, 0);
    const { cartVisible } = this.state;
    return (
      <div>
        <Navbar
          cartQuantity={quantity}
          cart={this.state.cart}
          showCart={this.showCart}
          cartVisible={cartVisible}
        />
        <Layout>
          <Title>Tienda</Title>
          <Products addToCart={this.addToCart} products={this.state.products} />
        </Layout>
      </div>
    );
  }
}

export default App;
