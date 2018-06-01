import React, {Component} from 'react';
import Dialog from 'react-toolbox/lib/dialog/Dialog';
import ProgressBar from 'react-toolbox/lib/progress_bar';
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
        const hiddenProgressBar = this.props.progressBar.show ? <ProgressBar type="linear" mode="indeterminate" /> : "";
        return (
            <Dialog
                active={this.props.dialog.active}
                onEscKeyDown={this.hideDialog}
                onOverlayClick={this.hideDialog}
                title='Add a new slot'
            >
                {hiddenProgressBar}
                <NewSessionForm/>
            </Dialog>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        progressBar: state.progressBar,
        dialog: state.dialog,
    }
};

export default connect(mapStateToProps)(NewSessionDialog);
