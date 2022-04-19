import { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
    const [isActive, setActive] = useState(false);

    return (
        <nav className="navbar is-transparent">
            <div className="navbar-brand">
                <div
                    className={isActive ? "navbar-burger is-active" : "navbar-burger"}
                    onClick={() => {
                        isActive ? setActive(false) : setActive(true);
                    }}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div className={isActive ? "navbar-menu is-active" : "navbar-menu"}>
                <div className="navbar-start">
                    <Link className="navbar-item" to="/">
                        Home
                    </Link>
                    <Link className="navbar-item" to="/gallery">
                        Galeria
                    </Link>
                    <Link className="navbar-item" to="/favorites">
                        Ulubione
                    </Link>
                </div>
                <div className="navbar-end field has-addons">
                    <p className="control">
                        <input className="input" type="text" placeholder="Podaj frazę ..." />
                    </p>
                    <p className="control">
                        <button className="button">Wyszukaj</button>
                    </p>
                </div>
            </div>
        </nav>
    );
};

export default Menu;
