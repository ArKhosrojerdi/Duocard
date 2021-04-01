import {combineReducers, createStore} from 'redux';
import {wordsReducer} from './Words/reducer';
import {librariesReducer} from './Libraries/reducer';
import {WordsState} from './Words/state';
import {LibraryState} from './Libraries/state';

export interface IRootState {
  words: WordsState;
  libraries: LibraryState;
}

const store = createStore<IRootState, any, any, any>(
  combineReducers({
    words: wordsReducer,
    libraries: librariesReducer
  })
);

export default store;
