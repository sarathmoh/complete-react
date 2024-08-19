import RestoCard, { withUpdatedOffer } from "./RestoCard";
// import restaurantList from "../utils/mockData.js";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { HOME_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/context/UserContext";

const BodyPart = () => {
  const [list, setList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterPurpose, setFilterPurpose] = useState([]);
  const status = useOnlineStatus();
  const GetOffer = withUpdatedOffer(RestoCard);
  const {loggedInUser,setUser}=useContext(UserContext)
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await fetch(HOME_URL);
    const json = await result.json();
    setList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterPurpose(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  if (status == false) return <h1>Sorry no internet connection</h1>;

  return list.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-contatiner">
      <div className="flex p-4 mx-2">
        <button
          className="  bg-gray-100 p-4 rounded-lg"
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
            className="p-3 border stroke-lime-400 ml-20 rounded-lg"
            type="text"
            value={loggedInUser}
            onChange={(e)=>setUser(e.target.value)}
          />
        </div>

        <div>
          <input
            className="p-3 border stroke-lime-400 ml-20 rounded-lg"
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          <button
            className="ml-4 bg-green-100 p-3 rounded-lg"
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
      <div className="flex flex-wrap">
        {filterPurpose.map((restaurant) => (
          <Link
            to={"restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {restaurant.info.aggregatedDiscountInfoV3 &&
            Object.keys(restaurant.info.aggregatedDiscountInfoV3).length > 0 ? (
              <GetOffer restoDetails={restaurant.info} />
            ) : (
              <RestoCard restoDetails={restaurant.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BodyPart;
