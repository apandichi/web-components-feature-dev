import React, {Component} from 'react';
import {connect} from "react-redux";
import Button from 'react-toolbox/lib/button/Button';
import Input from 'react-toolbox/lib/input/Input';
import {Field, reduxForm} from 'redux-form'

import 'material-design-icons/iconfont/material-icons.css'
import '../assets/css/App.css';
import {showDialog} from "../redux/dialogReducer";
import {addSlot} from "../redux/sessionsReducer";

class NewSessionForm extends Component {

    hideDialog = () => {
        this.props.dispatch(showDialog(false))
    };

    saveSlot = (formValues) => {
        this.props.dispatch(showDialog(false));
        this.props.dispatch(addSlot(formValues));
    };

    render() {
        return (
            <form onSubmit={this.saveSlot}>
                <Input label='Avatar' name="avatar" maxLength={2000} />
                <Input label='Name' name='name' maxLength={255} required />
                <Input label='Talk' name='talk' maxLength={255} />


                <div style={{"textAlign": "right"}}>
                    <Button label='Cancel' onClick={this.hideDialog}/>
                    <Button label='Save' type="submit" raised primary/>
                </div>
            </form>
        );
    }
}

export default connect()(NewSessionForm)
