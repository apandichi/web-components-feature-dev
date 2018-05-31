import React, {Component} from 'react';
import SessionCard from "./SessionCard";
import './Sessions.css';

class Sessions extends Component {

    render() {
        return (
            <div className="sessions">
                {
                    this.props.sessions.map((session, index) => (
                        <SessionCard key={index} session={session} />
                    ))
                }
            </div>
        );
    }
}

export default Sessions;
