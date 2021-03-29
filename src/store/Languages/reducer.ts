import {LanguagesState} from './state';
import {Constants} from "../actions";

const init: LanguagesState = [
  {id: 0, name: "English"},
  {id: 1, name: "Spanish"}
];

export function languagesReducer(state: LanguagesState = init, action: any): LanguagesState {
  switch (action.type) {
    case Constants.SET_LIBRARIES:
      return action.payload;
    default:
      return state;
  }
}
