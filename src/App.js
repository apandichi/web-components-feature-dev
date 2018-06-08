import React, {Component} from 'react';
import {connect} from "react-redux";
import {Card, CardMedia, CardTitle, CardText, CardActions} from 'react-toolbox/lib/card';

class App extends Component {

    render() {
        const sessions = [{
            avatar: 'https://i0.wp.com/itakeunconf.com/wp-content/uploads/2018/02/9bffa3fa7e52e115f1662d227d335a39.png?zoom=1.25&resize=270%2C270&ssl=1',
            name: 'Stefanie Hasler',
            talk: 'Outside-in TDD on a React/Mobx Website'
        },
            {
                avatar: "https://i2.wp.com/itakeunconf.com/wp-content/uploads/2015/10/michael-feathers1.jpg?resize=270%2C270&ssl=1",
                name: "Michael Feathers",
                talk: "Error Elimination as a Design Driver",
            },
            {
                avatar: "https://i1.wp.com/itakeunconf.com/wp-content/uploads/2016/02/Alastair_Smith_original-e1518689904631.jpg?resize=250%2C250&ssl=1",
                name: "Alastair Smith",
                talk: "Check That: How a List Can Save Your Life",
            },
        ];
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
