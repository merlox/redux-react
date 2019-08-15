import { FETCH_POSTS, NEW_POST } from '../actions/types'

const initialState = {
    items: [],
    item: {},
}

export default (state=initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            }
            break
        case NEW_POST:
            break
        default:
            return state
            break
    }
}
