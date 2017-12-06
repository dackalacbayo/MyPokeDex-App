import React, { Component } from 'react'
import request from 'superagent'
import './App.css'
import PokedexData from './components/PokedexData'
import PokedexNote from './components/PokedexNote'
import logo from './images/pokedex-logo.png'
import pokeball from './images/pokeball.gif'

class App extends Component {

  state = {
    search:'',
    note: '',
    details:{},
    notes:[],
    valueAttr:''
  }


  handleChange(prop, e){
    this.setState({[prop]:e.target.value})
  }


  handleSave(){
    var obj = {
      id:this.state.details.id,
      note:this.state.note
    }
    this.setState({
      notes: this.state.notes.concat(obj),
      note: ''
    })
    }

  handleSearch(){
    const { search } = this.state
    this.setState({
      search: ''
    })
    var that = this
    const url = 'https://pokeapi.co/api/v2/pokemon'
    console.log('call api: ', this.state.search)
    request.get(`${url}/${search}`)
    .end(function(err, res){
      if(err) alert('No Data Available')
        that.setState({details:res.body})
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

        </header>

        <div className="Pokedex-container">
          <div className="Pokedex-search">
           <img src={pokeball} className="pokeball-logo" alt="logo" /><br/>

            <input className="poke-search" placeholder="Enter Keywords" value={this.state.search}
              onChange={this.handleChange.bind(this,'search')} />
            <button className="btn-search" type="submit" value="Search"
              onClick={this.handleSearch.bind(this)} > Search</button>

          </div>

          <PokedexData
            details={this.state.details} />
          <PokedexNote
            notes = {this.state.notes}
            note = {this.state.note}
            details = {this.state.details}
            handleChange={this.handleChange.bind(this,'note')}
            handleSave={this.handleSave.bind(this)}/>
        </div>
      </div>
    );
  }

}

export default App;
