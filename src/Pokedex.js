import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

class Pokedex extends Component {
  render() {
    return (
      <div className="Pokedex">
        <div className="Pokedex-name">Pokedex</div>
        <div className="Pokedex-score">Total Score: {this.props.exp}</div>
        <div className="Pokedex-score">
          {this.props.isWinner ? "😀😀" : "😒😒"}
        </div>
        <div className="Pokedex-card">
          {this.props.pokemon.map(p => (
            <Pokecard
              id={p.id}
              name={p.name}
              type={p.type}
              exp={p.base_experience}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
