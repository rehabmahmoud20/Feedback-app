import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const FeedBackContext = createContext(); //use it to access the data and extract it

export const FeedBackProvider = ({ children }) => {
  // to access the provider to wrap our app
  const [feedBack, setFeedBack] = useState([
    {
      //data
      id: 1,
      rate: 6.7,
      text: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    },
  ]);
  const [itemToBeUpdated, setItemToBeUpdated] = useState({
    item: "",
    edite: false,
  });
  // fun to fetch data
  const fetchData = async () => {
    const response = await axios.get(`/feedback?_sort=id&_order=desc`);
    setFeedBack(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  // fun to update feedback
  const updateHandler = (item) => {
    setItemToBeUpdated({
      item,
      edite: true,
    });
  };
  // fun to delete feedBack
  const remove = async (id) => {
    if (window.confirm("Are you sure you want to remove this item ?")) {
      await axios.delete(`/feedback/${id}`)
       setFeedBack(feedBack.filter((e) => e.id !== id));
    }
  };
  // fun to edit feedback
  const editHandler = async (id, item) => {
    const response = await axios.put(`/feedback/${id}`, item);
    console.log(id, item);
    setFeedBack(
      feedBack.map((e) => (e.id === id ? { ...e, ...response.data } : e))
    );
  };

  // fun to add feedBack
  const addFeedBack = async (newFeedBack) => {
    newFeedBack.id = uuidv4();
    const response = await axios.post(`/feedback`, {
      text: newFeedBack.text,
      rate: newFeedBack.rate,
    });
    setFeedBack([response.data, ...feedBack]);
  };

  return (
    <>
      <FeedBackContext.Provider value={{
          feedBack,
          itemToBeUpdated,
          remove,
          addFeedBack,
          updateHandler,
          editHandler,
        }}
      >
        {children}
      </FeedBackContext.Provider>
    </>
  );
};
export default FeedBackContext;
