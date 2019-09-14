import Pokemons from './pokemons.json'
import ReactDOM from 'react-dom';
import React from 'react';
import { returnStatement } from '@babel/types';

class PokeSearch extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            pokemons: Pokemons.pokemons,
            pokeNameInput: '',
            pokeListVisibility: false,
        };
        this.handlePokeResearch = this.handlePokeResearch.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    list_to_li(iuop){
        console.log(iuop)
        if (iuop == undefined){
            iuop = ''
            return
        }
        const listItmes = iuop.map(element => 
            <li> {element} </li>)
            return listItmes
    } 

    handleChange = (event) => {
        this.setState({pokeNameInput : event.target.value})
    }

    handlePokeResearch(event){
        this.setState({pokeNameInput : event.target.value})
    }
    
    pokeFilter(){
        if(this.state.pokeNameInput.length >= 2){
            this.state.pokeListVisibility = true
        }else{
            this.state.pokeListVisibility = false
        }
        if (this.state.pokeListVisibility == false) return 

        let pokeNameList = []
        this.state.pokemons.forEach(element => {
            if(element.name.includes(this.state.pokeNameInput)){
                pokeNameList.push(element.name)
            }
        });
        return pokeNameList
    }

    render() {
        let pokeSearchBar = 
        <div>
            <input type="text" placeholder="pokemon..." value={this.state.pokeNameInput}
                   onChange={this.handleChange}/>
        </div>;
        let poke_List = this.pokeFilter()
        console.log(poke_List)
        return <div>
            {pokeSearchBar}
            <div style={this.state.pokeListVisibility ? {} : {display: 'none'}}> {(this.list_to_li(poke_List))} </div>
        </div>
    }
}
export default PokeSearch;