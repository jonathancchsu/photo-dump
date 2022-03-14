const GET_ALL_USERS = '/users/getAllUsers';

const getAllUsers = (users) => {
    return {
        type: GET_ALL_USERS,
        users
    }
}


export const getUsers = () => async (dispatch) => {
    const res = await fetch('/api/users/')
    if (res.ok) {
        const users = await res.json();
        dispatch(getAllUsers(users));
        return users
    }
}

const initialState = {};

const usersReducer = (state = initialState, action) => {
    const newState = {...state};

    switch (action.type) {
        case GET_ALL_USERS: {
            action.users.forEach(user => {
                newState[user.id] = user
            })
            return newState
        }
        default:
            return state;
    }
}

export default usersReducer;
