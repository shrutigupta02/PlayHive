import Background from "../components/Background";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import CardSlider from "../components/CardSlider";
import GameDeck from "../components/GameDeck";
import tzfe from '../assets/2048.png';
import ttt from '../assets/tictactoe.png';
import { useEffect } from "react";
import axios from 'axios';

export default function Games(){

    useEffect(()=>{
        axios.get('http://localhost:1234/games')
        .then(result => {
            console.log(result.data);
        })
        .catch(error => {
            console.log(error);
        })
    }, []);

    const multiplayer = {
        name: 'Single-Player Games',
        games: [
            {
                name: '2048',
                picture : tzfe,
                link : '/games/2048'
            },
        ]
    }

    const double = {
        name: 'Two player Games',
        games: [
            {
                name: 'Tic-Tac-Toe',
                picture : ttt,
                link: '/games/tictactoe'
            },
            
        ]
    }

    const allGames = [multiplayer, double];

    return(
        <div className="games">
            <NavBar/>
            <h1 className="heading">Discover top games:</h1>
            
            <GameDeck games = {allGames}/>
            <Footer/>
        </div>
    )
}