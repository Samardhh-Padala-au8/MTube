import { SET_SUB, TOGGLE_SUB_FETCHING_STATE } from "../actionType"

const initialState = {
    subscriptions: null,
    isSubscriptionFetching: false
}

const subscriptionReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case SET_SUB: return { ...state, subscriptions : payload }
        case TOGGLE_SUB_FETCHING_STATE: return { ...state, isSubscriptionFetching: !state.isSubscriptionFetching }
        default: return state
    }
}

export default subscriptionReducer