import { useSelector } from "react-redux";
import AnecdoteForm from "./components/AnecdoteForm";
import AnecdoteList from "./components/AnecdoteList";
import Filter from "./components/Filter";
import Notification from "./components/Notification";

const App = () => {
  const notificationMessage = useSelector((state) => state.notification);

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification message={notificationMessage} />
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  );
};

export default App;
