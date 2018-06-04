import React, {Component} from 'react';
import {Card, CardText, CardTitle} from 'react-toolbox/lib/card';

class SessionCard extends Component {

    render() {
        const {avatar, name, talk, abstract} = this.props.session;
        return (
            <Card style={{width: '400px', margin: '10px'}}>
                <CardTitle avatar={avatar} title={name} subtitle={talk} />
                <CardText>{abstract}</CardText>
            </Card>
        );
    }
}

export default SessionCard;
