const initialState = {
  teams: [],
  players: []
};

export const actionCreators = {
  addTeam: (data) => ({ type: 'ADD_TEAM', payload: data }),
  addPlayer: (data) => ({ type: 'ADD_PLAYER', payload: data })
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TEAM':
      return {
        ...state,
        teams: [
          ...state.teams,
          {
            id: state.teams.length,
            name: action.payload
          }
        ]
      };
    case 'ADD_PLAYER':
      return {
        ...state,
        players: [
          ...state.players,
          {
            id: state.players.length,
            name: action.payload.name,
            team: action.payload.team
          }
        ]
      };
    default:
      return state;
  }
};
