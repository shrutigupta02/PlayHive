import GameCard from "./GameCard";
import './GameCard.css';

export default function CardSlider({games}){
    return(
        <div className="card-slider">
            {
                games.map((game) => (
                    <GameCard name={game.name} image = {game.picture}/>
                ))
            }
        </div>
    )
}