import SearchBar from "./SearchBar"
import {useNavigate} from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; 

export default function NavBar(){
    const navigate = useNavigate();
    const buttons = [
        {name: 'Home', route: '/'},
        {name: 'Games', route: '/play'},
        {name: 'Rankings', route: '/rankings'},  
    ];

    let isLoggedIn = true;

    const handleRouting = (route)=>{
        navigate(route);
    }


    return(
        <div className="navbar">
            <div className="logo">
                <h1 onClick={()=>handleRouting('/')}
                >PH</h1>
            </div>

            <div className="right">
                <div className="buttons">
                    {buttons.map((button)=>(
                        <h2 onClick={()=>handleRouting(button.route)}
                        >{button.name}</h2>
                    ))}
                </div>
                <SearchBar/>

                {isLoggedIn?
                <div className="profile">
                <AccountCircleIcon onClick={()=>handleRouting('/profile')} />
            </div>
            :
            <div className="login">
            <h2 onClick={()=>handleRouting('/login')}
            >Login</h2>
        </div>
            }
                

                
            </div>

            
        </div>
    )
}