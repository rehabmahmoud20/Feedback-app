import { useContext } from "react";
import FeedBackContext from "../../Context/FeedBackContext";

export const FeedBackStats = () => {
  const {feedBack} = useContext(FeedBackContext)
  let average = feedBack.reduce((acc, next) => {
    return (acc + next.rate) / feedBack.length;
  }, 0);
  average = average.toFixed(1).replace(/[.]0$/, "");
  return (
    <section className="row  mb-4">
      <div className="col-md-6 d-flex justify-content-between mx-auto">
      <h4 className="fw-bold text-white"> Reviews : {feedBack.length}</h4>
      <h4 className="fw-bold text-white">Average rating : {isNaN(average) ? "0" : average} </h4>
      </div>
      
    </section>
  );
};
export default FeedBackStats;
