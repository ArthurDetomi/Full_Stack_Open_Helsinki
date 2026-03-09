import { useDispatch, useSelector } from "react-redux";

import { voteAnecdote } from "../reducers/anecdoteReducer";
import { sendNotification } from "../reducers/notificationReducer";

const AnecdoteList = () => {
  const dispatch = useDispatch();
  const anecdotes = useSelector((state) => {
    if (!state.filter || state.filter === "") {
      return state.anecdotes;
    }

    return state.anecdotes.filter((a) =>
      a.content.toLowerCase().includes(state.filter.toLowerCase()),
    );
  });

  const vote = (anecdote) => {
    dispatch(voteAnecdote(anecdote.id));
    dispatch(sendNotification(`You voted '${anecdote.content}'`));
  };

  const sortedAnecdotes = [...anecdotes].sort((a, b) => b.votes - a.votes);

  return (
    <div>
      {sortedAnecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnecdoteList;
