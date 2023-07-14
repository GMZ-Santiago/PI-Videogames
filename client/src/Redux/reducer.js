import {GET_VIDEOGAMES} from "../Redux/actions";

let initialState = {allGames: [], allGamesCopy: [], allGenres: []};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        allGames: action.payload,
        allGamesCopy: action.payload,
      };

      default:
        return state;
  }
}

export default rootReducer;