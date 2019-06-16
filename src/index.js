import React from 'react';
import ReactDOM from 'react-dom'
import App from './Components/App';
import reducers from './Reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>,
    document.querySelector('#root')
)