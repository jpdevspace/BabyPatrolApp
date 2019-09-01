import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

// Components
import Dashboard from './components/Dashboard/Dashboard';
import Layout from './layout/Layout';
import Login from './components/Auth/Login.jsx';
import Register from './components/Auth/Register.jsx';
import Reports from './components/Reports/Reports.jsx';

const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/reports" component={Reports} />
            </Switch>
        </Layout>
    </BrowserRouter>
);

export default App;
