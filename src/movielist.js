import React, {Component} from 'react';
import FinalCard from './finalcard';
class MovieList extends Component{
  render(){
    
    const movies = this.props.movies;
    const FevouriteMovies = this.props.FevouriteMovies;
    const users = this.props.users;

  return(

 		Object.keys(movies).map(id => <FinalCard  moviesName={movies[id]} users={users} fevMovUser={FevouriteMovies[id] }/>
                                 
       )

)}
}

export default MovieList