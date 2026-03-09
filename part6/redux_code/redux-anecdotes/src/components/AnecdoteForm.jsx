import { useDispatch } from "react-redux";

import { appendAnecdote } from "../reducers/anecdoteReducer";
import { sendNotification } from "../reducers/notificationReducer";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const addAnecdote = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    dispatch(appendAnecdote(content));
    dispatch(sendNotification(`You created new anecdote '${content}'`));
  };

  return (
    <div>
      <h2>create new</h2>

      <form onSubmit={addAnecdote}>
        <div>
          <input name="anecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;
