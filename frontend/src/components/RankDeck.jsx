import RankCard from "./RankCard";
import './RankCard.css';

export default function RankDeck(){
    return(
        <div className="rank-deck">
            
            <div className="rank-cards-container">
                <RankCard/>
                <RankCard/>
                <RankCard/>
            </div>
        </div>
    )
}
