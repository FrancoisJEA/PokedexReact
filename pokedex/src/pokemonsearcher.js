import Pokemons from './pokemons.json'
import ReactDOM from 'react-dom';
import React from 'react';

class PokemonSearcher extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            pokemons: Pokemons.pokemons,
            pokemonInputValue: '',
            infoVisibility: false,
            pokemon_to_show: []
        };
        this.handleResearch = this.handleResearch.bind(this);
    }

    handleNameShow(){
        choosed_onces = []
        
    }

    handleResearch = (event) => {
        this.setState({pokemonInputValue: event.target.value});
    }

    render(){
        let nameInput = <div style={this.state.infoVisibility ? {display: 'none'} : {}}>
            <input type="text" placeholder="Entrez un nom..." value={this.state.pokemonInputValue}
                   onChange={this.handleResearch}/>
        </div>
        console.log(this.state.pokemons)
        return <div style={this.state.infoVisibility ? {display: 'none'} : {}}>{nameInput}</div>
    }
}
export default PokemonSearcher;