import {combineReducers} from "redux";

import authReducer from "./auth";
import chanelReducers from "./chanel";
import videoReducer from "./Video";
import likedVideoReducer from "./likedVideo";
import watchLaterReducer from "./watchLater";
import currentUserReducer from "./currentUser";
import HistoryReducer from "./History";
import commentReducer from "./comments";


export default combineReducers({
  authReducer,
  currentUserReducer,
  chanelReducers,
  videoReducer,
  likedVideoReducer,
  watchLaterReducer,
  HistoryReducer,
  commentReducer
});
