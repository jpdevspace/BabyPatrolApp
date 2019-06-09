import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

// Components
import Dashboard from './pages/Dashboard';
import Layout from './layout/Layout';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Reports from './pages/Reports.jsx';

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
