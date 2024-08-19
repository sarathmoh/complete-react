import RestroCategoryList from "./RestroCategoryList";
import { useState } from "react";
const RestroCategory = ({ list, isActive, onShow, index, data }) => {
  // const [isLoading, setIsLoading] = useState(false);
  const eventHandler = () => {
    // setIsLoading(!isLoading);
    onShow(index);
  };

  return (
    <div>
      <div
        className="w-6/12 mx-auto  my-2 bg-gray-50 shadow-lg p-4 flex justify-between cursor-pointer"
        onClick={eventHandler}
      >
        <span className="text-xm font-bold text-xm">
          {list.title}({list.itemCards.length})
        </span>
        <span>+</span>
      </div>
      <div className="w-6/12 mx-auto  my-2 bg-gray-50 shadow-lg flex">
        {isActive && <RestroCategoryList data={list.itemCards} />}
      </div>
    </div>
  );
};

export default RestroCategory;
