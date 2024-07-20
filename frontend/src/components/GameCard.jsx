import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import './GameCard.css'

export default function GameCard({name, image}){
    return(
        <div className="game-card">
            <img src={image}/>
            <div className="game-info">
                <h1>{name}</h1>
                <PlayCircleIcon className='play'/>
            </div>
        </div>
    )
}