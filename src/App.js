import React, {Component} from 'react';
import {connect} from "react-redux";
import {Card, CardMedia, CardTitle, CardText, CardActions} from 'react-toolbox/lib/card';

class App extends Component {

    render() {
        const sessions = this.props.sessions;
        return (
            <div className="App">
                {sessions.map((session) => {
                    return <Card style={{width: '350px'}}>
                        <CardTitle
                            avatar={session.avatar}
                            title={session.name}
                            subtitle={session.talk}
                        />
                    </Card>
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
