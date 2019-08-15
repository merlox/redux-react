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
                items: action.payload,
            }
            break
        case NEW_POST:
            state.items.unshift(action.payload)
            return {
                ...state,
                item: action.payload,
            }
            break
        default:
            return state
            break
    }
}
