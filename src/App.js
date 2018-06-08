import React, {Component} from 'react';
import {connect} from "react-redux";
import {Card, CardActions, CardMedia, CardText, CardTitle} from 'react-toolbox/lib/card';
import Sessions from "./components/Sessions";
import Button from 'react-toolbox/lib/button/Button';
import {showDialog} from "./redux/dialogReducer";
import NewSessionDialog from "./components/NewSessionDialog";
import NewSessionForm from "./components/SessionFormWithInputs";

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

                <NewSessionDialog>
                    <NewSessionForm />
                </NewSessionDialog>
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
