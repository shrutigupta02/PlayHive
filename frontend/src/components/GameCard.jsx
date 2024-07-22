import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';
import './GameCard.css'

export default function GameCard({name, image}){
    const {isLoggedIn} = useAuth();
    const navigate = useNavigate();

    const playGame = ()=>{
        if(!isLoggedIn){
            navigate('/signup');
        }
    }

    return(
        <div className="game-card">
            <img src={image}/>
            <div className="game-info">
                <h1>{name}</h1>
                <PlayCircleIcon className='play' onClick={playGame}/>
            </div>
        </div>
    )
}