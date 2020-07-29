import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './components/Menu';

const Router = () => {
    return <BrowserRouter>
        <Menu />
        <Switch>
            <Route path="/" component={Home} />
            <Route path="/new-video" />
        </Switch>
    </BrowserRouter>
}

export default Router;