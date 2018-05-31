import 'whatwg-fetch';
import qs from 'qs';
import {createAction} from "redux-act";
import {createReducer} from "redux-act";

export const autosuggestInputChange = createAction("Autosuggest input change");
export const foundSuggestions = createAction("Found suggestions");
export const suggestionsClearRequested = createAction("Suggestions clear requested");
export const suggestionSelected = createAction("Suggestion selected");

export function suggestRooms(query) {
    return (dispatch) => {
        return fetch(
            `program/rooms?${qs.stringify({query: query})}`,
            {credentials: "same-origin"}
        )
            .then(r => r.json())
            .then(suggestions => dispatch(foundSuggestions(suggestions)))
    };
}

export function suggestSpeakers(query) {
    return (dispatch) => {
        return fetch(
            `program/speakers?${qs.stringify({query: query})}`,
            {credentials: "same-origin"}
        )
            .then(r => r.json())
            .then(suggestions => dispatch(foundSuggestions(suggestions)))
    };
}

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
    [suggestionSelected]: (state, selected) => {
        const {suggestion, suggestionValue, suggestionIndex, sectionIndex, method} = selected;
        return state;
    }

}, initialState);

export default autosuggestReducer;