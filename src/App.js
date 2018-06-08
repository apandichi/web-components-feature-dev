import React, {Component} from 'react';
import {connect} from "react-redux";
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';

class App extends Component {

    render() {
        const session = {
            avatar: 'https://i0.wp.com/itakeunconf.com/wp-content/uploads/2018/02/9bffa3fa7e52e115f1662d227d335a39.png?zoom=1.25&resize=270%2C270&ssl=1',
            name: 'Stefanie Hasler',
            talk: 'Outside-in TDD on a React/Mobx Website'
        }
        return (
            <div className="App">
                <Card style={{width: '350px'}}>
                    <CardTitle
                        avatar={session.avatar}
                        title={session.name}
                        subtitle={session.talk}
                    />
                </Card>
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
