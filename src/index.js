import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import theme from './assets/react-toolbox/theme'
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import './assets/react-toolbox/theme.css'
import 'material-design-icons/iconfont/material-icons.css'
import './assets/css/App.css';
import './assets/css/Sessions.css';
import './assets/css/AutosuggestField.css'

import {Provider} from 'react-redux'
import configureStore from './redux/configureStore'

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </Provider>,
    document.getElementById('root')
);
