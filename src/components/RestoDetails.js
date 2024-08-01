import { useEffect, useState } from "react";
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import { SPECIFIC_RESTO_MENU_ITEM_LIST } from "../utils/constants";
const RestoDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [details, setDetails] = useState([]);
  useEffect(() => {
    fetchRestroDetails();
  }, []);

  const fetchRestroDetails = async () => {
    const result = await fetch(SPECIFIC_RESTO_MENU_ITEM_LIST + id);
    const jsonData = await result.json();
    console.log(
      jsonData
    );
    setDetails(
      jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
        ?.card?.card?.itemCards
    );
  };
  return (
    <div className="detail_container">
      {details.map((item) => (
        <div className="resto-card" key={item.card.info.id}>
          {
            <img
              className="food-image"
              src={CDN_URL + item.card.info.imageId}
            />
          }
          <h5>
            {item.card.info.name + "  " + item.card.info.price / 100 + "Rs"}
          </h5>
          <h5>
            {"Rating:" +
              (item.card.info.ratings.aggregatedRating.rating ||
                "No rating yet ")}{" "}
          </h5>
          <h5>{item.card.info.category} </h5>
          <h5>{item.card.info.description} </h5>
        </div>
      ))}
    </div>
  );
};
export default RestoDetails;
