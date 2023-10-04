import { CartContext } from "../CartContext";
import { useContext } from "react";

function ProductCard(props) {
  // props.product is the product we are selling

  const product = props.product;
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);
  console.log(cart.items);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <h1 className="text-slate-700">{product.title}</h1>
      <p className="text-base text-teal-500">${product.price}</p>
      {productQuantity > 0 ? (
        <>
          <p>In Cart: {productQuantity}</p>
          <button onClick={() => cart.addOneToCart(product.id)}>+</button>
          <button onClick={() => cart.removeOneFromCart(product.id)}>-</button>
          <button onClick={() => cart.deleteFromCart(product.id)}>
            Remove from cart
          </button>
        </>
      ) : (
        <button
          onClick={() => cart.addOneToCart(product.id)}
          className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
}

export default ProductCard;
