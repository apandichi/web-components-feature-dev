import React, {Component} from 'react';
import Button from 'react-toolbox/lib/button/Button';
import Input from 'react-toolbox/lib/input/Input';
import {Field, reduxForm} from 'redux-form'

import 'material-design-icons/iconfont/material-icons.css'
import '../assets/css/App.css';
import {showDialog} from "../redux/dialogReducer";
import {addSlot} from "../redux/sessionsReducer";
import AutosuggestField from "./AutosuggestField";

export const materialDesignInput = ({input, meta, ...otherProps}) =>
    <Input {...input} {...otherProps}
           onChange={(newValue, event) => input.onChange && input.onChange(event, newValue)}

    />;

class SessionFormWithAutosuggest extends Component {

    hideDialog = () => {
        this.props.dispatch(showDialog(false))
    };

    saveSlot = (formValues) => {
        this.props.dispatch(showDialog(false));
        this.props.dispatch(addSlot(formValues));
    };

    render() {
        const {handleSubmit, submitting} = this.props;
        const onSubmit = handleSubmit(this.saveSlot.bind(this));
        return (
            <form onSubmit={onSubmit}>
                <Field label='Avatar' name="avatar" maxLength={2000} component={materialDesignInput}/>
                <AutosuggestField autocomplete={['avatar']} required label='Name' name='name' maxLength={255} component={materialDesignInput} change={this.props.change}/>
                <Field label='Talk' name='talk' maxLength={255} component={materialDesignInput}/>


                <div style={{"textAlign": "right"}}>
                    <Button label='Cancel' onClick={this.hideDialog}/>
                    <Button label='Save' type="submit" disabled={submitting} raised primary/>
                </div>
            </form>
        );
    }
}

export default reduxForm({
    form: 'SessionFormWithAutosuggest' // a unique identifier for this form
})(SessionFormWithAutosuggest)
