import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import './i18n';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter>
    <Suspense fallback={(<div>Loading</div>)}>
        <App />
    </Suspense>
    </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
