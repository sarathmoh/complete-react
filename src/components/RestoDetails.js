import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestroMenu from "../utils/useRestroMenu";
import Shimmer from "./Shimmer";
import RestroCategory from "./RestroCategory";
import { useState } from "react";

const RestoDetails = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const { id } = useParams();
  const details = useRestroMenu(id);
  if (!details) return <Shimmer />;
  const { name, cuisines, costForTwo } = details?.cards[2]?.card?.card?.info;
  // const data = details.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
  const categories =
    details.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log("details");
  const toggleHandler = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <div className="text-center">
      <h1 className="font-bold my-10 text-2xl">{name}</h1>
      <p className="font-semibold text-xl">
        {...cuisines.join(",")} cost for two-{costForTwo / 100}
      </p>
      {categories.map((listItem, index) => (
        <RestroCategory
          key={listItem.card.card.title}
          list={listItem?.card?.card}
          isActive={index === activeIndex}
          onShow={toggleHandler}
          index={index}
        />
      ))}
    </div>
  );
};
export default RestoDetails;
