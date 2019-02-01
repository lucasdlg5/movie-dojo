import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import Movie from './Movie';
import {initialMovies} from'../movies';
import {additionalMovies} from '../movies';
import AddMovie from './AddMovie';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header text="Discover Your Movie Mojo!" />
        <p className="App-intro">Sharing a few of our favourite movies</p>
        <div className="movies">
        {
          Object.keys(this.state.movies).map(key => <Movie key={key} meta={this.state.movies[key]}/>)
        }
        </div>
        <div className="add-movies"><button onClick={this.loadAdditionalMovies}>Load more...</button></div>

        <AddMovie addMovie={this.addMovieToGallery}/>

      </div>
    );
  }

  constructor() {
    super();
   
    //Necessário fazer um BINDING da função quando executada para qual a classe que esta sendo executado.
    this.loadAdditionalMovies = this.loadAdditionalMovies.bind(this);
    this.addMovieToGallery = this.addMovieToGallery.bind( this );
    this.state = {
      movies: initialMovies
    };
  }

  loadAdditionalMovies() {
    var currentMovies = { ...this.state.movies };
    var newMovies = Object.assign( currentMovies, additionalMovies );
   
    this.setState({ movies: newMovies });
  }

  addMovieToGallery( movie ) {
    var ts = Date.now();
    var newMovie = {};
    newMovie[ 'movie' + ts ] = movie;
    var currentMovies = { ...this.state.movies };
    var newMovies = Object.assign( currentMovies, newMovie );
    this.setState({ movies: newMovies });
  }



}
 
export default App;