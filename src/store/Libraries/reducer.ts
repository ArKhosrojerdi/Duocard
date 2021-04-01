import {LibraryState} from './state';
import {Constants} from "../actions";

const init: LibraryState = [];

export function librariesReducer(state: LibraryState = init, action: any): LibraryState {
  switch (action.type) {
    case Constants.SET_LIBRARIES:
      return action.payload;
    default:
      return state;
  }
}
