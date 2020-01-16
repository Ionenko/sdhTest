import {
    FETCH_USERS_SUCCESS,
    FETCH_USERS_REQUEST,
    FETCH_USERS_FAILURE,
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE,
    DELETE_USER_SUCCESS,
    UPDATE_USER_SUCCESS, RESET_USER_SUCCESS
} from '../../constants'

const initialState = {
    items: [],
    user: null,
    loading: true,
    error: null
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                items: [],
                loading: true,
                error: null
            };
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                items: action.payload,
                loading: false,
                error: null
            };
        case FETCH_USERS_FAILURE:
            return {
                ...state,
                items: [],
                loading: false,
                error: action.payload
            };
        case FETCH_USER_REQUEST:
            return {
                ...state,
                user: null,
                loading: true,
                error: null
            };
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                user: action.payload,
                loading: false,
                error: null
            };
        case FETCH_USER_FAILURE:
            return {
                ...state,
                user: null,
                loading: false,
                error: action.payload
            };
        case DELETE_USER_SUCCESS:
            return {
                ...state,
                items: state.items.filter( o => o.id !== action.payload)
            };
        case UPDATE_USER_SUCCESS:
            return {
                ...state,
                user: {
                    ...state.user,
                    ...action.payload.data
                },
                items: state.items.map((item, index) => {
                    if (item.id === +action.payload.id) {
                        return {
                            ...item,
                            ...action.payload.data
                        }
                    }
                    return item;
                })
            };
        case RESET_USER_SUCCESS:
            return {
                ...state,
                user: null
            };
        default:
            return state;
    }
};

export default usersReducer;