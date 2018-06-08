import React, {Component} from 'react';
import {connect} from "react-redux";

class App extends Component {

    render() {
        return (
            <div className="App">
                Blank app
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
