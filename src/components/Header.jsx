import Navlinks from "./NavLinks";

const Header = () => {
    return (
        <header>
            <div className="navigation">
                <div className="top-menu">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-6">
                                <nav className="nav ps-4 justify-content-lg-start"></nav>
                            </div>
                            <div className="col-md-12 col-lg-6">
                                <nav className="nav justify-content-end">
                                    <a
                                        className="nav-link"
                                        title="Euro Training Email Address"
                                        href="mailto:info@eurotrainingcenter.com">
                                        <i className="fas fa-envelope pe-1"></i>
                                        info@eurotrainingcenter.com
                                    </a>
                                    <a
                                        className="nav-link"
                                        title="Euro Training Contact Number"
                                        href="https://wa.me/00971585457333"
                                        target="_blank"
                                        rel="noreferrer">
                                        <i className="fas fa-phone-alt pe-1"></i>
                                        00 971 58 545 7333
                                    </a>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <Navlinks />
                </div>
            </div>
        </header>
    );
};

export default Header;
