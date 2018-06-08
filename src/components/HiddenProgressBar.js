import React, {Component} from 'react';
import ProgressBar from 'react-toolbox/lib/progress_bar';
import {connect} from "react-redux";
import 'material-design-icons/iconfont/material-icons.css'

class HiddenProgressBar extends Component {

    render() {
        return this.props.progressBar.show ?
            <ProgressBar type="linear" mode="indeterminate" /> :
            null;
    }
}

const mapStateToProps = (state) => {
    return {
        progressBar: state.progressBar,
    }
};

export default connect(mapStateToProps)(HiddenProgressBar);
