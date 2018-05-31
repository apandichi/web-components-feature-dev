import React, {Component} from 'react';
import {connect} from "react-redux";
import {Field} from 'redux-form'
import Autosuggest from 'react-autosuggest';
import {autosuggestInputChange, foundSuggestions, suggestionsClearRequested} from "./redux/autosuggestReducer";
import {materialDesignInput} from "./NewSessionForm";

const getSuggestionValue = suggestion => suggestion.name;

const renderSuggestion = suggestion => (
    <div>
        {suggestion.name}
    </div>
);

class AutosuggestInput extends Component {

    renderFieldComponent = inputProps => (
        <Field {...inputProps} {...this.props} component={materialDesignInput}/>
    );

    getSuggestions = value => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;

        return inputLength === 0 ? [] : this.props.sessions.filter(session =>
            session.name.toLowerCase().slice(0, inputLength) === inputValue
        );
    };

    onChange = (event, {newValue}) => {
        this.props.dispatch(autosuggestInputChange(newValue))
    };

    onSuggestionsFetchRequested = ({value}) => {
        const suggestions = this.getSuggestions(value);
        this.props.dispatch(foundSuggestions(suggestions))
    };

    onSuggestionsClearRequested = () => {
        this.props.dispatch(suggestionsClearRequested())
    };

    render() {

        const inputProps = {
            value: this.props.autosuggest.value,
            onChange: this.onChange,
        };

        return (
            <Autosuggest
                suggestions={this.props.autosuggest.suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                renderInputComponent={this.renderInputComponent}
                focusInputOnSuggestionClick={false} // fixes error similar to https://github.com/moroshko/react-autosuggest/issues/464
                inputProps={inputProps}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        sessions: state.sessions,
        autosuggest: state.autosuggest
    }
};

export default connect(mapStateToProps)(AutosuggestInput);
