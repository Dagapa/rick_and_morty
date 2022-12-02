import "./Nav.module.css"
import SearchBar from "../SearchBar/SearchBar";


const Nav = (props) => {
    const {onSearch} = props;
    return (
        <nav className="nav">
            <div>
                <SearchBar
                    onSearch={onSearch}
                />
            </div>
        </nav>
    )
}

export default Nav;