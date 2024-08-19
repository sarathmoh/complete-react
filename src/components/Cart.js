import { useSelector, useDispatch } from "react-redux";
import RestroCategoryList from "./RestroCategoryList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartDetails = useSelector((store) => store?.cartInfo?.items);

  const resetHandler = () => {
    dispatch(clearCart());
  };
  return (
    <div className="p-4 m-4 text-center">
      <h className="font-bold text-lg">cart</h>
      <div>
        <button
          className="p-4 m-4 text-center bg-gray-100 rounded-lg shadow-lg"
          onClick={resetHandler}
        >
          clear
        </button>
      </div>
      <div className="w-6/12 m-auto">
        <RestroCategoryList data={cartDetails} />
      </div>
    </div>
  );
};

export default Cart;
