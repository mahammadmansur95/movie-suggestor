import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router';

const Movie = () => {
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const lang = location.state.input.language[0];
  const gerner = location.state.input.gerner[0];

  useEffect(() => {
    axios.get('http://localhost:3003/movies').then((res) => {
      let filteredMovies = res.data.filter(o => (o.language === lang && o.genre === gerner));
      let random = Math.floor(Math.random() * filteredMovies.length);
      let movie = filteredMovies[random];
      setMovie(movie);
    });
  }, []);

  
  return (
    <div className="movie_container">
      {
        movie ?  (
          <>
            <aside className="image_container">
              <img src={movie.image || ''} alt="image" className="img"/>
            </aside>
            <div className="content">
              <div>
                <div className="field"> 
                  <span className="label">TiTle:</span><span className="para">{movie.title}</span>
                </div>
                
                <div className="field">
                  <span className="label">Director :</span><span className="para">{movie.director}</span>
                </div>
                
                <div className="field">
                  <span className="label">Rating :</span><span className="para">{movie.rating}</span>
                </div>
                
                <div className="field">
                  <label className="label">Description :</label>
                  <p className="para">{movie.description}</p>
                </div>
              </div>
            </div>
          </>
        ) : null
      }
    </div>
  );
};

export default Movie;
