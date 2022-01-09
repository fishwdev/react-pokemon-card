import React, {Component} from "react";

import './Pokecard.css';

//const POKECARD_PNG_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const POKECARD_PNG_API_v2 = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'
//const POKECARD_PNG_API_FINAL = 'https://raw.githubusercontent.com/kvpratama/gan/master/pokemon/data/pokemon/';

class Pokecard extends Component {
    render() {
        let pokecardImgSrc = `${POKECARD_PNG_API_v2}${this.props.id.toString().padStart(3, '0')}.png`;

        return (
            <div className='Pokecard'>
                <h1 className="Pokecard-name">{this.props.name}</h1>
                <div className="Pokecard-image">
                    <img src={pokecardImgSrc} alt={this.props.name}/>
                </div>
                <div className="Pokecard-data">Type: {this.props.type}</div>
                <div className="Pokecard-data">EXP: {this.props.base_experience}</div>
            </div>
        )
    }
}

export default Pokecard;