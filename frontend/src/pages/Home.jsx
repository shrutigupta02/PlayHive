import Background from "../components/Background";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";

export default function Home(){
    return(
        <div>
            <NavBar/>
            <Background title="PlayHive"/>
            <Footer/>
        </div>
    )
}