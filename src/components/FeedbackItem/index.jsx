import Card from "../Shared/Card";
import { FaTimes, FaEdit } from "react-icons/fa";
import FeedBackContext from "../../Context/FeedBackContext";
import { useContext } from "react";

const FeedbackItem = ({ feedBack }) => {
  const { remove, updateHandler } = useContext(FeedBackContext);

  const { rate, text, id } = feedBack;
  return (
    <div className="container ">
      <div className="row justify-content-center">
        <div className="col-md-6 mb-4">
          <Card>
            <span className="rate   position-absolute d-flex justify-content-center align-items-center fw-bolder fs-4">
              {rate}
            </span>
            <div className="btns-container mb-3">
              <div
                className="remove position-absolute "
                onClick={() => {
                  remove(id);
                }}
              >
                <FaTimes />
              </div>
              <div
                className="edit position-absolute "
                onClick={() => {
                  updateHandler(feedBack);
                }}
              >
                <FaEdit />
              </div>
            </div>

            <div className="text">{text}</div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FeedbackItem;
