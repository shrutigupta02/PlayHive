import Background from "../components/Background";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";

export default function Profile(){
    const name = "Shruti";
    return(
        <div className="profile-page">
            <NavBar/>
            <h1>Profile</h1>
            <h3>Hello, {name}!</h3>
            <button>Log out</button>
            <Background/>
            <Footer/>
        </div>
    )
}