import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar(){
    return(
        <div className='search' style={{display: 'flex', alignItems: 'center', marginLeft: '5px', marginRight: '5px'}}>
            <input type="text" placeholder="Search"/>
            <div className="icon">
                <SearchIcon/>
            </div>
        </div>
    );
}