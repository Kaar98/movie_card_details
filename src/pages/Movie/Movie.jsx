import React from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../../context.js';
import MovieDetails from '../../components/moviedetails/MovieDetails.jsx';

const Movie = () => {

const {movies}=useGlobalContext();
    const {id}=useParams();
    // console.log(movies);
    
  return (
    <>
     {movies?.length>0 && movies.filter((item)=>{
       return item.show.id===Number(id);
    }).map((item)=>{

        return <MovieDetails data={item} key={item.show.id}/>
    })}
    </>
  )
}

export default Movie
