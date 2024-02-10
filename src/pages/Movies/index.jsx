import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill
} from 'react-icons/bs';
import MovieCard from '../../components/MovieCard';

const moviesURL = import.meta.env.VITE_API;
const apikey = import.meta.env.VITE_API_KEY;

const Currency = (number) => {
  return number.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
};

const Movies = () => {
  const {id} = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async(url) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovie(data);
  }

  useEffect(() => {
    const movieURL = `${moviesURL}${id}?api_key=${apikey}`
    getMovie(movieURL)
  }, [])

  return (
    <div className='container texte-center'>
      <div className="row mt-5 d-flex justify-content-center">
        {movie && 
          <>
            <MovieCard movie={movie} showLink={false}/>
            <p className='text-center'>{movie.tagline}</p>
            <div className='text-center'>
              <h3>
                <BsWallet2/> Orçamento
              </h3>
              <p>{movie.budget}</p>
            </div>
            <div className='text-center'>
              <h3>
                <BsGraphUp/> Receita
              </h3>
              <p>{Currency(movie.revenue)}</p>
            </div>
            <div className='text-center'>
              <h3>
                <BsHourglassSplit/> Duração
              </h3>
              <p>{movie.runtime} Minutos</p>
            </div>
            <div className='text-center'>
              <h3>
                <BsFillFileEarmarkTextFill/> Descrição
              </h3>
              <p>{movie.overview}</p>
            </div>
          </>
        }
      </div>
    </div>
  )
}

export default Movies;