import SearchBar from "./SearchBar"

export default function NavBar(){
    const buttons = [
        {name: 'Games', route: '/play'},
        {name: 'Rankings', route: '/rankings'},
    ]


    return(
        <div className="navbar">
            <div className="logo">
                <h1>PH</h1>
            </div>

            <div className="right">
                <div className="buttons">
                    {buttons.map((button)=>(
                        <h2>{button.name}</h2>
                    ))}
                </div>
                <SearchBar/>
                <div className="login">
                    <h2>Login</h2>
                </div>
            </div>

            
        </div>
    )
}