import {combineReducers} from 'redux'
import { reducer as formReducer } from 'redux-form'
import sessionsReducer from './sessionsReducer'
import dialogReducer from "./dialogReducer";
import autosuggestReducer from "./autosuggestReducer";
import progressBarReducer from "./progressBarReducer";

const rootReducer = combineReducers({
    form: formReducer,
    autosuggest: autosuggestReducer,
    sessions: sessionsReducer,
    dialog: dialogReducer,
    progressBar: progressBarReducer
});

export default rootReducer