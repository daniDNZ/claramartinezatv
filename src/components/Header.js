import { NavLink } from "react-router-dom";

export default function Header() {

    return(
        <header className="header">
            <nav className="nav">
                <NavLink to="#">Clara Martínez ATV</NavLink>
                <ul className="nav__ul">
                    <li className="nav__li">
                        <NavLink to="#" >Home</NavLink>
                    </li>
                    <li className="nav__li">
                        <NavLink to="#" >Home</NavLink>
                    </li>
                    <li className="nav__li">
                        <NavLink to="#" >Home</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}