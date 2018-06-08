import React, {Component} from 'react';
import {connect} from "react-redux";
import {Card, CardMedia, CardTitle, CardText, CardActions} from 'react-toolbox/lib/card';
import SessionCard from "./components/SessionCard";
import Sessions from "./components/Sessions";
import Button from 'react-toolbox/lib/button/Button';
import Dialog from 'react-toolbox/lib/dialog/Dialog';
import {showDialog} from "./redux/dialogReducer";

class App extends Component {

    showTheDialog = () => {
        this.props.dispatch(showDialog(true))
    };

    hideTheDialog = () => {
        this.props.dispatch(showDialog(false))
    };

    render() {
        const sessions = this.props.sessions;
        return (
            <div className="App">
                <Sessions sessions={sessions} />
                <Button icon='add' label='Add session' raised primary
                    onClick={this.showTheDialog}
                />

                <Dialog
                    active={this.props.dialog.active}
                    onEscKeyDown={this.hideTheDialog}
                    onOverlayClick={this.hideTheDialog}
                    title='My awesome dialog'
                >
                    <p>Here you can add arbitrary content. Components like Pickers are using dialogs now.</p>
                </Dialog>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        sessions: state.sessions,
        dialog: state.dialog,
    }
};

export default connect(mapStateToProps)(App);
