import { CDN_URL } from "../utils/constants";
const RestoCard = ({ restoDetails }) => {
  console.log(restoDetails);
  const { name, cuisines, avgRating, cloudinaryImageId } = restoDetails;
  const { deliveryTime } = restoDetails?.sla;
  return (
    <div className="resto-card">
      <div className="food-image-parent">
        <img className="food-image" src={CDN_URL + cloudinaryImageId} />
      </div>

      <div className="card-details">
        <h3>{name}</h3>
        <h4>{...cuisines.join("-")}</h4>
        <h4>{avgRating}</h4>
        <h4>deliveryTime:{deliveryTime}mins </h4>
      </div>
    </div>
  );
};

export default RestoCard;
