import { Outlet, Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-sm navbar-dark d-flex" id="navigator">
                <Link to="/" className="navbar-brand" href="welcome.html">
                    <img src="/img/logo.png" alt="Product logo" className="navbar-brand" />
                </Link>
                <div className="nav-title">
                    <Link to="/">COLLEGE<span className="material-symbols-outlined">radar</span>HUNTER</Link>
                </div>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu" aria-controls="myNavigation" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarMenu">
                    <ul className="navbar-nav ml-auto">
                        <li className="navbar-item">
                            <Link to="/search" className="nav-link pr-3 text-white">Search</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <div className="drop-list">
                                <a href="#" className="nav-link dropdown-toggle text-white" data-toggle="dropdown">Saved List</a>
                                <div className="dropdown-menu">
                                    <a href="info.html" className="dropdown-item">Harvard University</a>
                                    <a href="#" className="dropdown-item">Boston University</a>
                                </div>
                            </div>
                        </li>
                        <li className="navbar-item">
                            <Link to="/organizer" className="nav-link pr-3 text-white">Organizer</Link>
                        </li>
                        <li className="navbar-item">
                            <a href="#" className="nav-link pr-3 text-white">
                                <span className="material-symbols-outlined">
                                    person_filled
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <main>
                <Outlet />
            </main>


            <footer>
                <div>
                    <p>
                        Contact Info: INFO340 22SP Group 12
                    </p>
                    <p>
                        &copy; 2022 Xiaofu Li, Kunyang Li, Yifei Tao, Hesong Zhao. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    )

};

export default NavBar;