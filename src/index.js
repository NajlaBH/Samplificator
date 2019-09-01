import React from 'react';
import { AppContainer } from 'react-hot-loader';
import { render } from 'react-dom';
import configStore from './common/configStore';
import routeConfig from './common/routeConfig';
import Root from './Root';

/*
 App add
 https://reacttraining.com/react-router/web/api/BrowserRouter/basename-string
*/
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Mainpage from './features/home/Mainpage.js';

const store = configStore();
// this is the default behavior
function getConfirmation(message, callback) {
  const allowTransition = window.confirm(message);
  callback(allowTransition);
}
let basessUrl ="/";
const supportsHistory = 'pushState' in window.history;
let confirmFunc={getConfirmation};
let keyNumber=12;

function renderApp(app) {
  render(
        <BrowserRouter
          basename={basessUrl}
          forceRefresh={!supportsHistory}
          getUserConfirmation={confirmFunc}
          keyLength={keyNumber}
        >
            <AppContainer>
              {app}
            </AppContainer>
        </BrowserRouter>,
      document.getElementById('root')
  );
}

renderApp(
  <Switch>
    <Root store={store} routeConfig={routeConfig} />
    <Route path="/" exact component={ Mainpage }/>
    <Route path="*" component={Mainpage} />
  </Switch>
);

// Hot Module Replacement API
/* istanbul ignore if  */
if (module.hot) {
  module.hot.accept('./common/routeConfig', () => {
    const nextRouteConfig = require('./common/routeConfig').default; // eslint-disable-line
    renderApp(<Root store={store} routeConfig={nextRouteConfig} />);
  });
  module.hot.accept('./Root', () => {
    const nextRoot = require('./Root').default; // eslint-disable-line
    renderApp(<Root store={store} routeConfig={routeConfig} />);
  });
}
