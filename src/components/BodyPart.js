import RestoCard from "./RestoCard";
// import restaurantList from "../utils/mockData.js";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const BodyPart = () => {
  const [list, setList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterPurpose, setFilterPurpose] = useState([]);

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
    setFilterPurpose(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return list.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-contatiner">
      <div className="btn">
        <button
          onClick={() => {
            const filteredList = list.filter((restaurant) => {
              return restaurant?.info?.avgRating > 4.6;
            });
            setList(filteredList);
          }}
        >
          Top Rated restaurant
        </button>
        <div>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredSearch = list.filter((resto) =>
                resto.info.name.toLowerCase().includes(searchTerm.toLowerCase())
              );
              setFilterPurpose(filteredSearch);
              setSearchTerm("")
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="card-display">
        {filterPurpose.map((restaurant) => (
          <RestoCard restoDetails={restaurant.info} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
};

export default BodyPart;
