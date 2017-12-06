import React, { Component } from 'react';
import '../App.css'

class PokedexData extends Component {
 state = { result: [] }


componentWillReceiveProps(nextProps){
   this.setState({ result: nextProps.details})
 }

renderStats(stats){
 	var stat=[]
 	if(stats){
 		stats.map((item, index) => {
 			if (index < 6){
 				stat = stat.concat(<h4 key={index}>{item.stat.name + ": " +item.base_stat}</h4>)
 			}
 		})
 	}
 	return stat
 }


renderAbilities(abilities){
 	var ability=[]
 	if(abilities){
 		abilities.map((item, index) => {
 			if (index < 5){
 				ability = ability.concat(<h4 key={index}>{item.ability.name}</h4>)
 			}
 		})
 	}
 	return ability
 }


renderMoves(moves){
 	var move=[]
 	if(moves){
 		moves.map((item, index) => {
 			if (index < 5){
 				move = move.concat(<h4 key={index}>{item.move.name}</h4>)
 			}
 		})
 	}
 	return move
 }

renderTypes(types){
 	var type=[]
 	if(types){
 		types.map((item, index) => {
 			if (index < 3){
 				type = type.concat(<h4 key={index}>{item.type.name}</h4>)
 			}
 		})
 	}
 	return type
 }

render() {
   const { id,sprites,types,moves,name,abilities,stats } = this.state.result
   const img = !sprites ? '' : sprites.front_default
   console.log(this.props, 'state: ', this.state)

   return (
     <div className="Pokedex-data">

	    <div className="pokemon-moves">
	     	<h5 className="pokemon-movesList">{this.renderMoves(moves)}</h5>
	    </div>

	    <div className="pokemon-types">
	     	<h5 className="pokemon-typeList">{this.renderTypes(types)}</h5>
	    </div>

	    <div className="pokemon-stats">
	     	<h5 className="pokemon-statsList">{this.renderStats(stats)}</h5>
	    </div>

	    <div className="pokemon-abilities">
			<h5 className="pokemon-abilitiesList">{this.renderAbilities(abilities)}</h5>
	    </div>

      <div className="pokemon-img" >
	     <img src={img} alt=""/>
      </div>
       <h3 className="pokemon-name">{name}</h3>
	     <h4 className="pokemon-Id">{id}</h4>

   	 </div>
   );
 }
}

export default PokedexData;
