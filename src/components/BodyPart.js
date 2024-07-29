import RestoCard from "./RestoCard";
import restaurantList from "../utils/mockData.js";
import { useState } from "react";

const BodyPart = () => {
  const [list, setList] = useState(restaurantList);
  return (
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
          <RestoCard restoDetails={restaurant} key={restaurant.id} />
        ))}
      </div>
    </div>
  );
};

export default BodyPart;
