import {usersApi} from '../../utils/api';
import {
    FETCH_USERS_SUCCESS,
    FETCH_USERS_REQUEST,
    FETCH_USERS_FAILURE,
    FETCH_USER_SUCCESS,
    FETCH_USER_REQUEST,
    FETCH_USER_FAILURE,
    DELETE_USER_SUCCESS,
    ADD_USER_SUCCESS, UPDATE_USER_SUCCESS, RESET_USER_SUCCESS
} from '../../constants'

const usersLoaded = (items) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: items
    }
};

const usersRequested = () => {
    return {
        type : FETCH_USERS_REQUEST
    }
};

const usersError = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
};

const fetchUsers = () => (dispatch) =>{

    dispatch(usersRequested());

    usersApi.getAll().then(({data}) => {
        dispatch(usersLoaded(data));
    }).catch((error) => {
        dispatch(usersError(error))
    });
};

const userLoaded = (items) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: items
    }
};

const userRequested = () => {
    return {
        type : FETCH_USER_REQUEST
    }
};

const userError = (error) => {
    return {
        type: FETCH_USER_FAILURE,
        payload: error
    }
};

const fetchUser = (id) => (dispatch) => {

    dispatch(userRequested());

    usersApi.getUser(id).then(({data}) => {
        dispatch(userLoaded(data));

    }).catch((error) => {
        dispatch(userError(error))
    });
};

const userDeleted = (id) => {
    return {
        type: DELETE_USER_SUCCESS,
        payload: id
    }
};

const deleteUser = (id, history) => (dispatch) => {
    usersApi.deleteUser(id).then(()=>{
        dispatch(userDeleted(id));
        history && history.push('/users');
    }).catch((error) => {
        dispatch(userError(error))
    });
};

const userAdded = (id) => {
    return {
        type: ADD_USER_SUCCESS,
        payload: id
    }
};

const addUser = (user) => (dispatch) => {
    usersApi.addUser(user).then((response) => {
        dispatch(userAdded(user))
    }).catch((error) => {
        dispatch(dispatch(userError(error)))
    });
};

const resetUser = () => (dispatch) =>{
    dispatch({
        type: RESET_USER_SUCCESS
    })
};

const userUpdated = (id, data) => {
    return {
        type: UPDATE_USER_SUCCESS,
        payload: {
            id,
            data
        }
    }
};

const updateUser = (id, data) => (dispatch) => {
    usersApi.updateUser(id, data).then((response) => {
        dispatch(userUpdated(id, data))
    }).catch((error) => {
        dispatch(dispatch(userError(error)))
    });
};

export {
    fetchUsers,
    fetchUser,
    deleteUser,
    addUser,
    updateUser,
    resetUser
}