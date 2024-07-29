import RestoCard from "./RestoCard";
// import restaurantList from "../utils/mockData.js";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const BodyPart = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await result.json();
    console.log(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return list.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-contatiner">
      {/* <div className="search">search</div> */}
      <div className="btn">
        <button
          onClick={() => {
            const filteredList = restaurantList.filter((restaurant) => {
              return restaurant?.avgRating >= 4;
            });
            setList(filteredList);
          }}
        >
          Click Me
        </button>
      </div>
      <div className="card-display">
        {list.map((restaurant) => (
          <RestoCard restoDetails={restaurant.info} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
};

export default BodyPart;
