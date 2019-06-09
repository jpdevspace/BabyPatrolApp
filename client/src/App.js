import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

const App = () => (
    <BrowserRouter>
         <Layout>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/reports" component={Report} />
          </Switch>
        </Layout>
    </BrowserRouter>
);

export default App;
