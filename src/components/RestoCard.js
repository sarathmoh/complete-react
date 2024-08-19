import { CDN_URL } from "../utils/constants";
const RestoCard = ({ restoDetails }) => {
  const { name, cuisines, avgRating, cloudinaryImageId } = restoDetails;
  const { deliveryTime } = restoDetails?.sla;
  return (
    <div className="p-4 m-4 w-[270px] h-[500px] bg-gray-100 hover:bg-gray-200 rounded-2xl shadow-lg">
      <div className="food-image-parent  ">
        <img
          className="rounded-2xl w-30 h-70 "
          src={CDN_URL + cloudinaryImageId}
        />
      </div>

      <div>
        <h3 className="font-bold pt-2 text-xl text-center">{name}</h3>
        <h4 className="text-center">{...cuisines.join("-")}</h4>
        <h4 className="text-center">{avgRating}</h4>
        <h4 className="text-center">deliveryTime:{deliveryTime}mins </h4>
      </div>
    </div>
  );
};

export const withUpdatedOffer = (RestoCard) => {
  return (props) => {
    // console.log("props from higher", props);

    const result = (
      <div className="border stroke-lime-400 p-3 rounded-lg bg-pink-100 absolute">
        {props.restoDetails.aggregatedDiscountInfoV3.header}
        <span className="ml-2">
          {props.restoDetails.aggregatedDiscountInfoV3.subHeader}
        </span>
      </div>
    );

    return (
      <div>
        {result}
        <RestoCard {...props} />
      </div>
    );
  };
};

export default RestoCard;
