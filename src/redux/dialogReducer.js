import {createAction, createReducer} from "redux-act";

export const showDialog = createAction("Show dialog");

const initialState = {
    active: false
};

const dialogReducer = createReducer({
    [showDialog]: (state, active) => {
        return {
            ...state,
            active: active
        };
    },
}, initialState);

export default dialogReducer;