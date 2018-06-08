import React, {Component} from 'react';
import {connect} from "react-redux";
import {Card, CardMedia, CardTitle, CardText, CardActions} from 'react-toolbox/lib/card';
import SessionCard from "./components/SessionCard";

class App extends Component {

    render() {
        const sessions = this.props.sessions;
        return (
            <div className="App">
                {sessions.map((session) => {
                    return <SessionCard session={session}/>
                })}
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
