import { useParams } from 'react-router-dom';
import { movies } from '../storage/movie_data';
import StarRating from '../components/StarRating';
import ToggleButton from '@mui/material/ToggleButton';
import CheckIcon from '@mui/icons-material/Check';
import { useState, useEffect } from 'react';
import '../styles/card.css'

function Card(){
    const param = useParams();
    const movie = movies.find(item => item.title === param.title);

    const [favorite, setFavorite] = useState(() => {
        const saved = localStorage.getItem("favorite")
        return saved ? JSON.parse(saved) : []
    });

    const isSelected = favorite.some(f => f.title === movie.title)

    useEffect(() => {
        localStorage.setItem("favorite", JSON.stringify(favorite))
    }, [favorite]);

    const toggleFavorite = () => {
        if(isSelected){
            setFavorite(prev => prev.filter(item => item.title !== movie.title))
        } else{
            setFavorite(prev => [...prev, movie])
        }
    };

    return (
        <div className="cardContainer">
            <h2>{movie.title}</h2>
            <div className="cardDetails">
                <p>Год выпуска: {movie.year}</p>
                <p>Жанр: {movie.genre}</p>
                <p>Режисёр: {movie.director}</p>
            </div>
      
            <div className="cardFavorite">
                <ToggleButton
                    value="check"
                    selected={isSelected}
                    onClick={toggleFavorite}
                >
                <CheckIcon />
                </ToggleButton>
            </div>
            
            <img src={movie.img} alt={movie.title} />
            <StarRating title={movie.title} />
        </div>
      );      
}

export default Card;
