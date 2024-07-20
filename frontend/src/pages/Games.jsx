import Background from "../components/Background";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import GameCard from "../components/GameCard";

export default function Games(){
    return(
        <div>
            <NavBar/>
            <Background />
            <GameCard/>
            <Footer/>
        </div>
    )
}