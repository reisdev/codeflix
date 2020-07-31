import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './components/Menu';
import Footer from './components/Footer';
import RegisterVideo from './pages/RegisterVideo';

const Router = () => {
    return <BrowserRouter>
        <Menu />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register/video" component={RegisterVideo} />
        </Switch>
        <Footer />
    </BrowserRouter>
}

export default Router;