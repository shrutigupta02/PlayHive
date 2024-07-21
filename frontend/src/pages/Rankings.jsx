import Background from "../components/Background";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import RankDeck from "../components/RankDeck";


export default function Rankings(){
    return(
        <div className="games">
            <NavBar/>
            <h1 className="heading">Our top scorers!</h1>
            <h3>Play regularly to get featured on our leaderboard.</h3>
            <RankDeck/>
            <Footer/>
        </div>
    )
}