import { Component } from "react";
import Logo from "./Logo";
import ShopCart from "./ShopCart";

const styles = {
  navbar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "100px",
    justifyContent: "space-between",
    position: "relative",
    padding: "0 50px",
    boxShadow: "0 2px 3px rgb(0,0,0,0.1)",
  },
};
class Navbar extends Component {
  render() {
    const { cart, showCart, cartQuantity, cartVisible } = this.props;
    return (
      <nav style={styles.navbar}>
        <Logo />
        <ShopCart
          cart={cart}
          showCart={showCart}
          cartVisible={cartVisible}
          cartQuantity={cartQuantity}
        />
      </nav>
    );
  }
}

export default Navbar;
