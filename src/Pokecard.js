import React, {Component} from "react";

import './Pokecard.css';

const POKECARD_PNG_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const FINAL_POKECARD_PNG_API = 'https://raw.githubusercontent.com/kvpratama/gan/master/pokemon/data/pokemon/';

class Pokecard extends Component {
    render() {
        let pokecardImgSrc = `${POKECARD_PNG_API}${this.props.id}.png`;

        return (
            <div className='Pokecard'>
                <h1>{this.props.name}</h1>
                <img src={pokecardImgSrc} alt={this.props.name}/>
                <div>Type: {this.props.type}</div>
                <div>EXP: {this.props.base_experience}</div>
            </div>
        )
    }
}

export default Pokecard;