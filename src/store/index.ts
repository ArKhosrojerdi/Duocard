import {combineReducers, createStore} from 'redux';
import {wordsReducer} from './Words/reducer';
import {languagesReducer} from './Languages/reducer';
import {WordsState} from './Words/state';
import {LanguagesState} from './Languages/state';

export interface IRootState {
  words: WordsState;
  languages: LanguagesState;
}

const store = createStore<IRootState, any, any, any>(
  combineReducers({
    words: wordsReducer,
    languages: languagesReducer
  })
);

export default store;
