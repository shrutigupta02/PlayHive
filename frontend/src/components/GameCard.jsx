import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import './GameCard.css'

export default function GameCard(){
    return(
        <div className="game-card">
            <img src="src/assets/demo.png"/>
            <div className="game-info">
                <h1>Demo heading</h1>
                <PlayCircleIcon className='play'/>
            </div>
        </div>
    )
}