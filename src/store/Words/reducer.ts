import {WordsState} from './state';

const init: WordsState = []

export function wordsReducer(state: WordsState = init, action: any): WordsState {
  switch (action.type) {
    default:
      return state;
  }
}
