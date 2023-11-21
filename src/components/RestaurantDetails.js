import { useParams } from "react-router-dom";
const RestaurantDetails = () => {
  const params = useParams();
  console.log(params);
  //Search Params by itterating in restaurant list and display its data
  return (
    <div>
      This is RestaurantDetails page hehehehehehehe. Restaurant Code :{" "}
      {params.id}
    </div>
  );
};

export default RestaurantDetails;
