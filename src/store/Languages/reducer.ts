import {LanguagesState} from './state';

const init: LanguagesState = []

export function languagesReducer(state: LanguagesState = init, action: any): LanguagesState {
  switch (action.type) {
    default:
      return state;
  }
}
