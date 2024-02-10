import { useState, useEffect } from 'react';
import Spinner from '../../components/Spinner';
import MovieCard from '../../components/MovieCard';

const moviesURL = import.meta.env.VITE_API;
const apikey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setTopMovies(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?api_key=${apikey}`;
    getTopRatedMovies(topRatedUrl);
  }, []);

  return (
    <div className='container text-center mt-5'>
      <h2 className='title mb-5'>Melhores filmes:</h2>
      <div className='row d-flex flex-wrap'>
        {topMovies.length === 0 &&
          <Spinner />
        }
        {topMovies.length > 0 && topMovies.map((movie) =>
          <MovieCard key={movie.id} movie={movie} />
        )}
      </div>
    </div>
  );
};

export default Home;