import RestoCard from "./RestoCard";
// import restaurantList from "../utils/mockData.js";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { HOME_URL } from "../utils/constants";
const BodyPart = () => {
  console.log("REndering");
  const [list, setList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterPurpose, setFilterPurpose] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await fetch(HOME_URL);
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
            const filteredList = filterPurpose.filter((restaurant) => {
              return restaurant?.info?.avgRating > 4.6;
            });
            setFilterPurpose(filteredList);
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
              setSearchTerm("");
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="card-display">
        {filterPurpose.map((restaurant) => (
          <Link
            to={"restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            <RestoCard restoDetails={restaurant.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BodyPart;
