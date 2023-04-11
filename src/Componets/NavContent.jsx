import { Link } from "react-router-dom"

export const NavContent = () =>{
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                    <Link to="/blogs">Blogs</Link>
                </li>
            </ul>
        </nav>
    )
}