import {createAction, createReducer} from "redux-act";

export const showProgressBar = createAction("Show progress bar");

const initialState = {
    show: false
};

const progressBarReducer = createReducer({
    [showProgressBar]: (state, show) => {
        return {
            show: show
        };
    },
}, initialState);

export default progressBarReducer;