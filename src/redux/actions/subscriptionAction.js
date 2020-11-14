import axios from "axios"
import { SET_SUB, TOGGLE_SUB_FETCHING_STATE } from "../actionType"
import config from "../../config"
export const fetchSubscription = () => async (dispatch, getState) => {
    const accessToken = getState().userState.user.access_token
    try {

        dispatch({ type: SET_SUB, payload: null })
        dispatch({ type: TOGGLE_SUB_FETCHING_STATE })
        console.log(accessToken)
        const { data } = await axios(`${config.BASE_URL}/subscriptions?&part=snippet&channelId=UCXPk9J0EOlzyivTNYUBX9-A&maxResults=20&key=${config.API_KEY}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                Accept: "application/json"
            }
        })
        console.log(data)
        dispatch({ type: SET_SUB, payload: data })
    }
    catch (err) {
        console.error(err)
    }
    finally {
        dispatch({ type: TOGGLE_SUB_FETCHING_STATE })
    }
}
