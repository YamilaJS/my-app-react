import React, { Component } from 'react';
import axios from 'axios';
import List from '../components/List';

class PokeListContainer extends Component {
    state = {
        pokeData:  []
    }

    componentDidMount() {
        axios.get('https://pokeapi.co/api/v2/pokemon')
        .then(res => {
            const pokeData = res.data.results;

            this.setState({
                pokeData
            })
        })
        .catch(error => {
            console.log(error);
        })
    }


    render() {

        const { pokeData } = this.state;

        return(
            <List pokedata={ pokeData }/>
        );
    }
}

    
export default PokeListContainer;