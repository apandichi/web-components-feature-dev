import React, {Component} from 'react';
import Dialog from 'react-toolbox/lib/dialog/Dialog';
import {connect} from "react-redux";
import 'material-design-icons/iconfont/material-icons.css'
import './assets/css/App.css';
import {showDialog} from "./redux/dialogReducer";
import NewSessionForm from "./NewSessionForm";

class NewSessionDialog extends Component {

    hideDialog = () => {
        this.props.dispatch(showDialog(false))
    };

    render() {
        return (
            <Dialog
                active={this.props.active}
                onEscKeyDown={this.hideDialog}
                onOverlayClick={this.hideDialog}
                title='Add a new slot'
            >
                <NewSessionForm />
            </Dialog>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        active: state.dialog.active,
    }
};

export default connect(mapStateToProps)(NewSessionDialog);
