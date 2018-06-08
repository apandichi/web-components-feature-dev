import React, {Component} from 'react';
import {Card, CardText, CardTitle} from 'react-toolbox/lib/card';

class SessionCard extends Component {

    render() {
        const {avatar, name, talk} = this.props.session;
        return (
            <Card style={{width: '400px', margin: '10px'}}>
                <CardTitle
                    avatar={avatar}
                    title={name}
                    subtitle={talk} />
            </Card>
        );
    }
}

export default SessionCard;
