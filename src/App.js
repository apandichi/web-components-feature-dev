import React, {Component} from 'react';
import {connect} from "react-redux";
import {Card, CardMedia, CardTitle, CardText, CardActions} from 'react-toolbox/lib/card';
import SessionCard from "./components/SessionCard";
import Sessions from "./components/Sessions";
import Button from 'react-toolbox/lib/button/Button';

class App extends Component {

    render() {
        const sessions = this.props.sessions;
        return (
            <div className="App">
                <Sessions sessions={sessions} />
                <Button icon='add' label='Add session' raised primary />
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
