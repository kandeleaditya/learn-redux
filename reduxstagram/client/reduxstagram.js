import React from 'react';

import {render} from 'react-dom';

// import Css
import css from './styles/style.styl';

//import components
//import Main from './component/Main';
import App from './component/App';
import Single from './component/Single';
import PhotoGrid from './component/PhotoGrid';

//import react routre deps
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import store,{history} from './store';

// import Raven from 'raven-js';
// import {sentry_url} from './data/config';

// Raven.config(sentry_url).install();

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={PhotoGrid}></IndexRoute>
                <Route path="/view/:postId" component={Single}></Route>
            </Route>
        </Router>
    </Provider>
)

render (router,document.getElementById('root'));