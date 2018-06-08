import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from "react-redux";
import {Field} from 'redux-form'
import Autosuggest from 'react-autosuggest';
import {autosuggestInputChange, foundSuggestions, suggestionsClearRequested} from "../redux/autosuggestReducer";
import Debounce from "./Debounce";
import {showProgressBar} from "../redux/progressBarReducer";

class DebouncedAutosuggestField extends Component {

    debounce = new Debounce({
        func: function (value) {
            console.log(`Sending request to server... ${value}`);
            const suggestions = this.getSuggestions(value);
            console.log(`Server response found ${suggestions.length}`);
            this.props.dispatch(foundSuggestions(suggestions));
            this.props.dispatch(showProgressBar(false));
        }.bind(this),
        wait: 1000
    });

    getSuggestions = value => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
        const suggestions = inputLength === 0 ? [] : this.props.sessions.filter(session =>
            session.name.toLowerCase().indexOf(inputValue) >= 0
        );
        return _.uniqBy(suggestions, 'name');
    };

    onChange = (event, {newValue}) => {
        this.props.dispatch(autosuggestInputChange(newValue))
    };

    onSuggestionsFetchRequested = ({value, reason}) => {
        if (reason === 'input-focused') return;
        this.props.dispatch(showProgressBar(true));
        this.debounce.debouncedSearch(value);
    };

    onSuggestionsClearRequested = () => {
        this.props.dispatch(suggestionsClearRequested())
    };

    onSuggestionSelected = (event, selected) => {
        const selectedValue = selected.suggestion[this.props.name];
        this.props.change(this.props.name, selectedValue);
        this.props.autocomplete.forEach(fieldName => this.props.change(fieldName, selected.suggestion[fieldName]))
    };

    renderInputComponent = inputProps => {
        const {autocomplete, change, sessions, autosuggest, ...otherProps} = this.props;
        return (<Field {...otherProps} {...inputProps} />)
    };

    render() {
        const inputProps = {
            value: this.props.autosuggest.value,
            onChange: this.onChange,
        };
        return (
            <Autosuggest
                suggestions={this.props.autosuggest.suggestions}
                getSuggestionValue={suggestion => suggestion.name}
                renderSuggestion={suggestion => suggestion.name}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                onSuggestionSelected={this.onSuggestionSelected}
                renderInputComponent={this.renderInputComponent}
                focusInputOnSuggestionClick={false}
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

export default connect(mapStateToProps)(DebouncedAutosuggestField);
