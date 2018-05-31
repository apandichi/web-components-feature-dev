import React, {Component} from 'react';
import {Card, CardText, CardTitle} from 'react-toolbox/lib/card';

class SessionCard extends Component {

    render() {
        return (
            <Card style={{width: '400px', margin: '10px'}}>
                <CardTitle
                    avatar={this.props.session.avatar}
                    title={this.props.session.name}
                    subtitle={this.props.session.talk}
                />
                <CardText>{this.props.session.abstract}</CardText>
            </Card>
        );
    }
}

export default SessionCard;
