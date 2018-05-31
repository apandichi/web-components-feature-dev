import 'material-design-icons/iconfont/material-icons.css'
import './App.css';

import React, {Component} from 'react';
import Button from 'react-toolbox/lib/button/Button';
import Sessions from "./Sessions";
import {connect} from "react-redux";
import NewSessionDialog from "./NewSessionDialog";
import {showDialog} from "./redux/dialogReducer";

class App extends Component {

    showDialogToAddSlot = () => {
        this.props.dispatch(showDialog(true))
    };

    render() {
        return (
            <div className="App">
                <Sessions sessions={this.props.sessions}/>
                <Button icon='add' label='Add slot' raised primary onClick={this.showDialogToAddSlot} />
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
