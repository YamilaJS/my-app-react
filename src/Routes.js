import React from 'react';
import Home from './components/Home';
import { Switch, Route } from 'react-router-dom';
import PokeListContainer from './containers/PokeListContainer';

const Routes = () => {
    return(
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/pokemons' component={PokeListContainer}/>
        </Switch>
    );
}

export default Routes;
