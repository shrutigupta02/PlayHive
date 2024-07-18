import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar(){
    return(
        <div className='search'>
            <input type="text" placeholder="Search"/>
            <div className="icon">
                <SearchIcon/>
            </div>
        </div>
    );
}