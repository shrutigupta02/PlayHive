import CardSlider from "./CardSlider";
import './GameCard.css';

export default function GameDeck({ games }) { // Destructure props here
    return (
        <div className="deck">
            {games.map((category, index) => ( // Correct iteration syntax
                <div key={index} className="slide-container">
                    <h1>{category.name}</h1>
                    <CardSlider games={category.games} /> {/* Pass the games array to CardSlider */}
                </div>
            ))}
        </div>
    );
}
