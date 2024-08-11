import { useParams } from "react-router-dom";
import useRestroMenu from "../utils/useRestroMenu";
import Shimmer from "./Shimmer";
import RestroCategory from "./RestroCategory";

const RestoDetails = () => {
  const { id } = useParams();
  const details = useRestroMenu(id);
  if (!details) return <Shimmer />;
  const { name, cuisines, costForTwo } = details?.cards[2]?.card?.card?.info;
  console.log(details?.cards[2]?.card?.card?.info);

  // const { itemCards } =
  //   details.cards[4].groupedCard.cardGroupMap.REGULAR.cards
  // console.log(itemCards, "item");

  // console.log(
  //   details.cards[2].card.card.info.name,
  //   "details pageeeeeeeeeeeeee"
  // );

  const data = details.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
  const categories =
    details.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(data, "data");
  console.log(categories, "categorieseee");

  return (
    <div className="text-center">
      <h1 className="font-bold my-10 text-2xl">{name}</h1>
      <p className="font-semibold text-xl">
        {...cuisines.join(",")} cost for two-{costForTwo / 100}
      </p>
      {categories.map((listItem) => (
        <RestroCategory
          key={listItem.card.card.title}
          list={listItem?.card?.card}
        />
      ))}
    </div>
  );
};
export default RestoDetails;

{
  /* <div>
        {categories.map((listItem) => (
          <RestroCategory
            key={listItem.card.card.title}
            list={listItem.card.card}
          />
        ))}
      </div> */
}

{
  /* {itemCards.map((item) => (
        <ul>
          <li key={item.card.info.id}>
            {item.card.info.name}
            {item.card.info.price}
          </li>
        </ul>
      ))} */
}
{
  /* {details.map((item) => (
        <div className="p-4 m-4 w-[330px] h-[600px] bg-gray-100 hover:bg-gray-200 rounded-2xl shadow-lg" key={item.card.info.id}>
          {
            <img
              className="food-image p-4"
              src={CDN_URL + item.card.info.imageId}
            />
          }
          <h5 className="my-5 font-extrabold">
            {item.card.info.name + "  " + item.card.info.price / 100 + "Rs"}
          </h5>
          <h5 className="text-center font-medium">
            {"Rating:" +
              (item.card.info.ratings.aggregatedRating.rating ||
                "No rating yet ")}{" "}
          </h5>
          <h5 className="text-center font-medium">{item.card.info.category} </h5>
          <h5 className="text-center font-medium">{item.card.info.description} </h5>
        </div>
      ))} */
}
