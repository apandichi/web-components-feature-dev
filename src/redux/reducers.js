import {combineReducers} from 'redux'
import { reducer as formReducer } from 'redux-form'
import sessionsReducer from './sessionsReducer'
import dialogReducer from "./dialogReducer";
import autosuggestReducer from "./autosuggestReducer";

const rootReducer = combineReducers({
    form: formReducer,
    autosuggest: autosuggestReducer,
    sessions: sessionsReducer,
    dialog: dialogReducer,
});

export default rootReducer