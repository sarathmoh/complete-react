import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestroMenu from "../utils/useRestroMenu";

const RestoDetails = () => {
  const { id } = useParams();
  const details = useRestroMenu(id);

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
