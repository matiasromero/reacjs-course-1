import { Component } from "react";
import BubbleAlert from "./BubbleAlert";

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
    return (
      <div>
        <span style={styles.bubble}>
          <BubbleAlert value={12} />
        </span>
        <button style={styles.shopCart}>Cart</button>
      </div>
    );
  }
}

export default ShopCart;