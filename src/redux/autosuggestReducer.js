import {createAction} from "redux-act";
import {createReducer} from "redux-act";

export const autosuggestInputChange = createAction("Autosuggest input change");
export const foundSuggestions = createAction("Found suggestions");
export const suggestionsClearRequested = createAction("Suggestions clear requested");


const initialState = {
    value: '',
    suggestions: []
};

const autosuggestReducer = createReducer({
    [autosuggestInputChange]: (state, value) => {
        return {
            ...state,
            value: value
        };
    },
    [foundSuggestions]: (state, suggestions) => {
        return {
            ...state,
            suggestions: suggestions
        };
    },
    [suggestionsClearRequested]: (state) => {
        return {
            ...state,
            suggestions: []
        }
    },
}, initialState);

export default autosuggestReducer;