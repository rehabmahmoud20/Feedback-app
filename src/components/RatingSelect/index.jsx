import  { useState,useEffect ,useContext} from "react";
import FeedBackContext from "../../Context/FeedBackContext";


const RatingSelect = ({ select }) => {
  const {itemToBeUpdated} = useContext(FeedBackContext)
  const [selected, setSelected] = useState(0);
  const handleChange = (e) => {
    setSelected(+e.target.value);
    select(+e.target.value);
  };
  useEffect(() => {
    if (itemToBeUpdated.edite) {

      setSelected(itemToBeUpdated.item.rate);
    }
  }, [itemToBeUpdated]);
  return (
    <ul className="list-unstyled d-flex justify-content-between">
      <li className="position-relative d-flex justify-content-center align-items-center">
        <input
          type="radio"
          value="1"
          id="num1"
          name="rate"
          onChange={handleChange}
          checked={selected === 1}
        />
        <label
          className="position-absolute d-flex justify-content-center align-items-center"
          htmlFor="id"
        >
          1
        </label>
      </li>
      <li className="position-relative d-flex justify-content-center align-items-center">
        <input
          type="radio"
          value="2"
          id="num2"
          name="rate"
          onChange={handleChange}
          checked={selected === 2}
        />
        <label
          className="position-absolute d-flex justify-content-center align-items-center"
          htmlFor="id"
        >
          2
        </label>
      </li>
      <li className="position-relative d-flex justify-content-center align-items-center">
        <input
          type="radio"
          value="3"
          id="num3"
          name="rate"
          onChange={handleChange}
          checked={selected === 3}
        />
        <label
          className="position-absolute d-flex justify-content-center align-items-center"
          htmlFor="id"
        >
          3
        </label>
      </li>{" "}
      <li className="position-relative d-flex justify-content-center align-items-center">
        <input
          type="radio"
          value="4"
          id="num4"
          name="rate"
          onChange={handleChange}
          checked={selected === 4}
        />
        <label
          className="position-absolute d-flex justify-content-center align-items-center"
          htmlFor="id"
        >
          4
        </label>
      </li>{" "}
      <li className="position-relative d-flex justify-content-center align-items-center">
        <input
          type="radio"
          value="5"
          id="num5"
          name="rate"
          onChange={handleChange}
          checked={selected === 5}
        />
        <label
          className="position-absolute d-flex justify-content-center align-items-center"
          htmlFor="id"
        >
          5
        </label>
      </li>{" "}
      <li className="position-relative d-flex justify-content-center align-items-center">
        <input
          type="radio"
          value="6"
          id="num6"
          name="rate"
          onChange={handleChange}
          checked={selected === 6}
        />
        <label
          className="position-absolute d-flex justify-content-center align-items-center"
          htmlFor="id"
        >
          6
        </label>
      </li>{" "}
      <li className="position-relative d-flex justify-content-center align-items-center">
        <input
          type="radio"
          value="7"
          id="num7"
          name="rate"
          onChange={handleChange}
          checked={selected === 7}
        />
        <label
          className="position-absolute d-flex justify-content-center align-items-center"
          htmlFor="id"
        >
          7
        </label>
      </li>{" "}
      <li className="position-relative d-flex justify-content-center align-items-center">
        <input
          type="radio"
          value="8"
          id="num8"
          name="rate"
          onChange={handleChange}
          checked={selected === 8}
        />
        <label
          className="position-absolute d-flex justify-content-center align-items-center"
          htmlFor="id"
        >
          8
        </label>
      </li>{" "}
      <li className="position-relative d-flex justify-content-center align-items-center">
        <input
          type="radio"
          value="9"
          id="num9"
          name="rate"
          onChange={handleChange}
          checked={selected === 9}
        />
        <label
          className="position-absolute d-flex justify-content-center align-items-center"
          htmlFor="id"
        >
          9
        </label>
      </li>
      <li className="position-relative d-flex justify-content-center align-items-center">
        <input
          type="radio"
          value="10"
          id="num10"
          name="rate"
          onChange={handleChange}
          checked={selected === 10}
        />
        <label
          className="position-absolute d-flex justify-content-center align-items-center"
          htmlFor="id"
        >
          10
        </label>
      </li>
    </ul>
  );
};

export default RatingSelect;
