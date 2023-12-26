import { NavLink } from "react-router-dom";
const links = [
    { id: 1, url: "/", text: "Home" },
    { id: 2, url: "about", text: "About us" },
    { id: 3, url: "programs", text: "Training Programs" },
    { id: 4, url: "contact", text: "Contact us" },
];

import Logo from "../assets/images/logo.png";

const NavLinks = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <NavLink className="navbar-brand" title="Euro Training" to={"/"}>
                    <img src={Logo} alt="Euro Training" />
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        {links.map((link) => {
                            const { id, url, text } = link;
                            return (
                                <li className="nav-item" key={id}>
                                    <NavLink className="nav-link active" aria-current="page" title="Euro Training" to={url}>
                                        {text}
                                    </NavLink>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavLinks;
