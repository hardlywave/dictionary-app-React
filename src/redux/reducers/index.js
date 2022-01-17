import { combineReducers } from "redux";
//Reducers
import meaningsReducer from "./meaningsReducer";
import phoneticsReducer from "./phoneticsReducer";
import wordsReducer from "./wordsReducer";

export const rootReducer = combineReducers({
  phonetics: phoneticsReducer,
  meanings: meaningsReducer,
  words: wordsReducer,
});
