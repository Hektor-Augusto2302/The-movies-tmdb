import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import './index.css';

const imageURL = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true }) => {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card mb-4 py-5">
                <img className="card-img-top" src={imageURL + movie.poster_path} alt={movie.title} />
                <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-text mb-5 d-flex justify-content-center">
                        <FaStar /> 
                        <span>
                            {movie.vote_average}
                        </span>
                    </p>
                    {showLink && <Link className="px-5 py-3" to={`/movie/${movie.id}`}>Detalhes</Link>}
                </div>
            </div>
        </div>
    );
};

export default MovieCard;