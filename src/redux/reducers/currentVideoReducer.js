import {SET_CURRENT_VIDEO,TOGGLE_CURRENT_VIDEO_FETCHING_STATE,SET_COMMENTS} from "../actionType"

const initialState = {
    videos: null,
    isFetchingCurrentVideo: false,
    comments:null
}

const currentVideoReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case SET_CURRENT_VIDEO: return{...state,videos:payload}
        case SET_COMMENTS: return{...state,comments:payload}
        case TOGGLE_CURRENT_VIDEO_FETCHING_STATE: return{...state,isFetchingCurrentVideo:!state.isFetchingCurrentVideo}
        default: return state
    }
}

export default currentVideoReducer