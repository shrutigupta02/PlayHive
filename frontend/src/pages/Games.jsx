import Background from "../components/Background";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import CardSlider from "../components/CardSlider";
import GameDeck from "../components/GameDeck";

export default function Games(){
    const multiplayer = {
        name: 'Multi-Player Games',
        games: [
            {
                name: 'Ludo',
                picture : 'src/assets/Untitled design.png',
            },
            {
                name: 'Any',
                picture : 'src/assets/demo.png',
            },
            {
                name: 'Blah',
                picture : 'src/assets/demo.png',
            }
        ]
    }

    const double = {
        name: 'Two player Games',
        games: [
            {
                name: 'Tic-Tac-Toe',
                picture : 'src/assets/demo.png',
            },
            {
                name: 'Any',
                picture : 'src/assets/demo.png',
            },
            {
                name: 'Blah',
                picture : 'src/assets/demo.png',
            }
        ]
    }

    const allGames = [multiplayer, double, double];

    return(
        <div className="games">
            <NavBar/>
            <h1 className="heading">Discover top games:</h1>
            
            <GameDeck games = {allGames}/>
            <Footer/>
        </div>
    )
}