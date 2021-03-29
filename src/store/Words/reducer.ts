import {WordsState} from './state';
import {Constants} from "../actions";

const init: WordsState = []

export function wordsReducer(state: WordsState = init, action: any): WordsState {
  switch (action.type) {
    case Constants.SET_WORDS:
      return action.payload;
    case Constants.REMOVE_WORD:
      return state.filter(word => word.id !== action.id)
    default:
      return state;
  }
}
