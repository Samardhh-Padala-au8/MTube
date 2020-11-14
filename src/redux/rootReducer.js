import { combineReducers } from "redux"
import videoReducer from "./reducers/videoReducer"
import userReducer from "./reducers/userReducer"
import currentVideoReducer from "./reducers/currentVideoReducer"
import playlistReducer from "./reducers/playlistReducer"
import subscriptionReducer from "./reducers/subscriptionlistReducer"

const rootReducer = combineReducers({
    videoState: videoReducer,
    userState: userReducer,
    currentVideoState: currentVideoReducer,
    playlistState: playlistReducer,
    subscriptionState: subscriptionReducer
})

export default rootReducer