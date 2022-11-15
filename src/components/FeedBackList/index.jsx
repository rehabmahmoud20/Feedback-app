import FeedbackItem from "../FeedbackItem";
import FeedBackContext from "../../Context/FeedBackContext";
import RingLoader from "react-spinners/RingLoader";
import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";

export const FeedBackList = () => {
  const { feedBack } = useContext(FeedBackContext);
  if (!feedBack || feedBack.length === 0) {
    return (
      <div className="d-flex justify-content-center">
 <RingLoader
      
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      </div>
     
    );
  }
  return (
    <>
    <AnimatePresence>
    {feedBack.map((item) => (
      <motion.div
      key={item.id}
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
      >
        <FeedbackItem feedBack={item} key={item.id} />

      </motion.div>
      ))}
    </AnimatePresence>
     
    </>
  );
};
export default FeedBackList;

