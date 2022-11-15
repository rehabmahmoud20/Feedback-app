import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import FeedBackList from "./components/FeedBackList";
import FeedBackStats from "./components/FeedBackStats";
import FeedBackForm from "./components/FeedBackForm";
import { FeedBackProvider } from "./Context/FeedBackContext";

function App() {
  const bgColor = "#ACE6F6";

  return (
    <FeedBackProvider>

      <Header bgColor={bgColor} />
      <div className="container">
      <FeedBackStats />

        <FeedBackForm />
        <FeedBackList />
      </div>
    </FeedBackProvider>
  );
}

export default App;
