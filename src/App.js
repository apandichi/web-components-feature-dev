import React, {Component} from 'react';
import {connect} from "react-redux";
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';

class App extends Component {

    render() {
        return (
            <div className="App">
                <Card style={{width: '350px'}}>
                    <CardTitle
                        avatar="https://placeimg.com/80/80/animals"
                        title="Avatar style title"
                        subtitle="Subtitle here"
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
