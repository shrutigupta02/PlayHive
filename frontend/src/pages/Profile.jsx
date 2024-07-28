import { fireBaseAuth } from "../../utils/firebase-config";
import Background from "../components/Background";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import { signOut } from 'firebase/auth';
import { useNavigate } from "react-router-dom";

export default function Profile(){
    const navigate = useNavigate();

    const handleLogOut = async()=>{
        await signOut(fireBaseAuth);
        navigate('/login');
    }

    return(
        <div className="profile-page">
            <NavBar/>
            <h1>Profile</h1>
            <h3>Hello!</h3>
            <button onClick={handleLogOut}>Log out</button>
            <Footer/>
        </div>
    )
}