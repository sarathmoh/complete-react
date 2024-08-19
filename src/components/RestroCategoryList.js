import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addCart } from "../utils/cartSlice";
const RestroCategoryList = ({ data }) => {
  const dispatch = useDispatch();
  const cartHandler = (item) => {
    dispatch(addCart(item));
  };
  return (
    <div>
      {data.map((item) => (
        <div
          key={item.card.info.id}
          className="border bg-gray-50 text-left p-4 flex justify-between rounded-2xl"
        >
          <div className="w-9/12">
            <div>
              <span className="font-bold">{item.card.info.name}</span>
              <span>
                (
                {(item?.card?.info?.price && item?.card?.info?.price / 100) ||
                  (item?.card?.info?.defaultPrice &&
                    item?.card?.info?.defaultPrice / 100)}
                )-Rs
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <img className="w-46" src={CDN_URL + item.card.info.imageId} />
            <button
              className="p-1 mt-1 bg-black text-white rounded-lg shadow-lg"
              onClick={()=>cartHandler(item)}
            >
              Add+
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestroCategoryList;
