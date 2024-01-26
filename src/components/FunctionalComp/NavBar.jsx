import "../../css/NavBar.css"
import { Link } from "react-router-dom";
const NavBar = () => {
    return(
        <ol>
            <li><Link to = "/Home">Home</Link></li>
            <li><Link to = "/Skills">Skills</Link></li>
            <li><Link to = "/Login">Login</Link></li> 
            <li><Link to = "/About">About</Link></li> 
        </ol>
    )

}
export default NavBar;