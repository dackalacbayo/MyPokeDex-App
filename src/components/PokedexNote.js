import React, { Component } from 'react'
import '../App.css'
import pikachu from '../images/pikachu.gif'
import pikaaaa from '../images/poke-notex.png'


class PokedexNote extends Component {


  render() {

    const {details, notes} = this.props
    console.log('pokenote', notes)
    const noteList = notes
    .filter((note) => details.id === note.id )
    .map((msg) => <li className="noteList">{msg.note}</li>)


return (
        <div className="Pokedex-note">

             <img className="pokenote-logo" src={pikaaaa} alt="logo" />
          	 <textarea className="pokenote-textarea" placeholder="Type here..."
              onChange={this.props.handleChange} value={this.props.note}/>
          	 <button className="btn-save" type="submit" value="Search"
              onClick={this.props.handleSave}>Save</button>

              <div className="noteList">
                {noteList}
              </div>
        </div>
    );
  }
};

export default PokedexNote;
