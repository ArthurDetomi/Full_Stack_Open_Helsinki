import { createSlice } from "@reduxjs/toolkit";

import anecdoteService from "../services/anecdotes";

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    voteAnecdote(state, action) {
      const anecdoteUpdated = action.payload;
      return state.map((a) =>
        a.id === anecdoteUpdated.id ? anecdoteUpdated : a,
      );
    },
    createAnecdote(state, action) {
      return [...state, action.payload];
    },
    setAnecdotes(state, action) {
      return action.payload;
    },
  },
});

const { setAnecdotes, createAnecdote, voteAnecdote } = anecdoteSlice.actions;

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    dispatch(setAnecdotes(anecdotes));
  };
};

export const appendAnecdote = (content) => {
  return async (dispatch) => {
    const anecdote = await anecdoteService.createNew(content);
    dispatch(createAnecdote(anecdote));
  };
};

export const addVoteAnecdote = (id) => {
  return async (dispatch) => {
    const anecdoteUpdated = await anecdoteService.vote(id);
    dispatch(voteAnecdote(anecdoteUpdated));
  };
};

export default anecdoteSlice.reducer;
