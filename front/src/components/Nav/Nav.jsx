import { Link } from "react-router-dom";
import SearchBar from '../Search/SearchBar';

const Nav = ({onSearch})=>{
    return(
        <nav>
            <Link to="/">LOGOUT</Link>
            <Link to='/about'>About</Link>
            <Link to='/home'>Home</Link>
            <SearchBar onSearch={onSearch} />
        </nav>
    )
}

export default Nav;
