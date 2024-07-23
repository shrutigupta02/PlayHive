import Background from "../components/Background";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import CardSlider from "../components/CardSlider";
import GameDeck from "../components/GameDeck";

export default function Games(){
    const multiplayer = {
        name: 'Single-Player Games',
        games: [
            {
                name: '2048',
                picture : 'src/assets/2048.png',
                link : '/games/2048'
            },
        ]
    }

    const double = {
        name: 'Two player Games',
        games: [
            {
                name: 'Tic-Tac-Toe',
                picture : 'src/assets/tictactoe.png',
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