import { createActions } from "redux-actions";
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  teams: [],
  players: []
};

export const actionCreators = createActions({}, "ADD_TEAM", "ADD_PLAYER");

export const reducer = createReducer(initialState, {
  [actionCreators.addTeam]: (state, action) => {
    state.teams.push({
      id: state.teams.length,
      name: action.payload
    });
  },
  [actionCreators.addPlayer]: (state, action) => {
    state.players.push({
      id: state.players.length,
      name: action.payload.name,
      team: action.payload.team
    });
  }
});
