import { useContext, useEffect, useState } from "react";
import Card from "../Shared/Card";
import Button from "../Shared/Button";
import RatingSelect from "../RatingSelect";
import FeedBackContext from "../../Context/FeedBackContext";

export const FeedBackForm = () => {
  const { addFeedBack, itemToBeUpdated, editHandler } =
    useContext(FeedBackContext);
  const [rate, setRate] = useState(10);
  const [text, setText] = useState("");
  const [btnDisabled, setbtnDisabled] = useState(true);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    if (itemToBeUpdated.edite === true) {
      setText(itemToBeUpdated.item.text);
      setbtnDisabled(false);
      setRate(itemToBeUpdated.item.rate);
    }
  }, [itemToBeUpdated]);

  // fun to handel the feedback
  const handelSubmit = (e) => {
    e.preventDefault();
    if (!/\w{10}/gi.test(e.target.value)) {
      const newFeedBack = {
        text,
        rate,
      };
      if (itemToBeUpdated.edite === true) {
        editHandler(itemToBeUpdated.item.id, newFeedBack);
      } else {
        addFeedBack(newFeedBack);
      }
      setText("");
      setbtnDisabled(true);
    }
  };
  // fun to update the rate
  const handleSelect = (val) => {
    setRate(val);
  };
  //  form validation
  const handelFeedBack = (e) => {
    setText(e.target.value);

    if (e.target.value === "") {
      setMsg(null);
      setbtnDisabled(true);
    } else if (!/(\w|\s){10}/gi.test(e.target.value)) {
      setMsg("Sorry the value must be at lest 10 letters");
      setbtnDisabled(true);
    } else {
      setMsg("");
      setbtnDisabled(false);
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-6 mb-4">
        <Card>
          <RatingSelect select={handleSelect} />
          <form onSubmit={handelSubmit} className="position-relative">
            <h2 className="mb-3">
              How would you want to rate your experience with us?
            </h2>
            <input
              type="text"
              id=""
              placeholder="Enter your task"
              className="form-control mb-3"
              onChange={handelFeedBack}
              value={text}
              name="feedBack"
            />
          {msg && <div className="alert alert-danger" role="alert">{msg}</div>}

            <Button type="submit" isDisabled={btnDisabled} >
              Submit
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};
export default FeedBackForm;
