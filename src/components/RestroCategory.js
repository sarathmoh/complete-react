import RestroCategoryList from "./RestroCategoryList";
import { useState } from "react";
const RestroCategory = ({ list }) => {
  const [isLoading, setIsLoading] = useState(false);
  const eventHandler = () => {
    setIsLoading(!isLoading);
  };
  return (
    <div>
      <div className="w-6/12 mx-auto  my-2 bg-gray-50 shadow-lg p-4 flex justify-between ">
        <span
          onClick={eventHandler}
          className="text-xm font-bold text-xm cursor-pointer"
        >
          {list.title}({list.itemCards.length})
        </span>
        <span>+</span>
      </div>
      <div className="w-6/12 mx-auto  my-2 bg-gray-50 shadow-lg flex">
        {isLoading && <RestroCategoryList data={list} />}
      </div>
    </div>
  );
};

export default RestroCategory;
