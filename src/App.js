import React, {Component} from 'react';
import {connect} from "react-redux";
import {Card, CardMedia, CardTitle, CardText, CardActions} from 'react-toolbox/lib/card';
import SessionCard from "./components/SessionCard";
import Sessions from "./components/Sessions";
import Button from 'react-toolbox/lib/button/Button';
import Dialog from 'react-toolbox/lib/dialog/Dialog';
import {showDialog} from "./redux/dialogReducer";
import NewSessionDialog from "./components/NewSessionDialog";

class App extends Component {

    showTheDialog = () => {
        this.props.dispatch(showDialog(true))
    };

    render() {
        const sessions = this.props.sessions;
        return (
            <div className="App">
                <Sessions sessions={sessions} />
                <Button icon='add' label='Add session' raised primary
                    onClick={this.showTheDialog}
                />

                <NewSessionDialog />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        sessions: state.sessions,
    }
};

export default connect(mapStateToProps)(App);
