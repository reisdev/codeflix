import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../../pages/Home';
import RegisterVideo from '../../pages/RegisterVideo';


const Router = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register/video" component={RegisterVideo} />
    </Switch>
)

export default Router;