import { Component } from "react";
import BubbleAlert from "./BubbleAlert";
import CartDetails from "./CartDetails";

const styles = {
  shopCart: {
    backgroundColor: "#359A2C",
    color: "#fff",
    border: "none",
    padding: "15px",
    borderRadius: "15px",
    cursor: "pointer",
  },
  bubble: {
    position: "relative",
    left: 12,
    top: 20,
  },
};
class ShopCart extends Component {
  render() {
    const { cart, cartVisible, showCart } = this.props;
    return (
      <div>
        <span style={styles.bubble}>
          {this.props.cartQuantity !== 0 ? (
            <BubbleAlert value={this.props.cartQuantity} />
          ) : null}
        </span>
        <button onClick={showCart} style={styles.shopCart}>
          Cart
        </button>
        {cartVisible ? <CartDetails cart={cart} /> : null}
      </div>
    );
  }
}

export default ShopCart;
