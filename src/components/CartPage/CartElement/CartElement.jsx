import { useDispatch } from "react-redux";
import "./CartElement.css";
import { useState } from "react";
import { decreaseQty, increaseQty, removeFromCart } from "../redux/action";
const CartElement = ({ name, seller, image, price, discount, quantity }) => {
  console.log(name, seller, image, price, discount);
  const [mainPrice, setMainPrice] = useState(price);
  const [discountPrice, setDiscountPrice] = useState(
    price - price * (discount / 100)
  );
  const dispatch = useDispatch();

  return (
    <div className="mainCartElement">
      <div id="cartElementContainer">
        <div>
          <img src={image} width={150} height={150} />
        </div>
        <div>
          <p className="productName">{name}</p>
          <p className="productDetails">Black, DIY(Do-It-Yourself)</p>
          <p className="sellerName">Seller:{seller}</p>
          <div id="elementPrice">
            <span className="beforePrice">₹{mainPrice}</span>
            <span className="currentPrice">₹{discountPrice.toFixed(0)}</span>
            <span className="discount">{discount}% Off</span>
          </div>
        </div>
      </div>
      <div id="quantityContainer">
        <div className="quantity-control">
          <button
            className="decrement"
            disabled={quantity == 1}
            onClick={() => {
              dispatch(decreaseQty(name));
              setMainPrice(mainPrice - price);
              setDiscountPrice(
                discountPrice - (price - price * (discount / 100))
              );
            }}
          >
            -
          </button>
          <div className="quantity">{quantity}</div>
          <button
            className="increment"
            onClick={() => {
              dispatch(increaseQty(name));
              setMainPrice(mainPrice + price);
              setDiscountPrice(
                discountPrice + (price - price * (discount / 100))
              );
            }}
          >
            +
          </button>
        </div>
        <div id="removeBtn">
          <button>SAVE FOR LATER</button>
          <button
            onClick={() => {
              dispatch(removeFromCart(name));
            }}
          >
            REMOVE
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartElement;
