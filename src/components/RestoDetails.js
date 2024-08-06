import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestroMenu from "../utils/useRestroMenu";

const RestoDetails = () => {
  const { id } = useParams();
  const details = useRestroMenu(id);

  return (
    <div className="flex flex-wrap" >
      {details.map((item) => (
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
      ))}
    </div>
  );
};
export default RestoDetails;
