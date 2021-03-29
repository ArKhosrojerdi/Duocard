import {LanguagesState} from './state';

const init: LanguagesState = [
  {id: 0, name: "English"},
  {id: 1, name: "Spanish"}
];

export function languagesReducer(state: LanguagesState = init, action: any): LanguagesState {
  switch (action.type) {
    default:
      return state;
  }
}
