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
                                        href="mailto:sales@lltc.co">
                                        <i className="fas fa-envelope pe-1"></i>
                                        info@euro-training.net
                                    </a>
                                    <a
                                        className="nav-link"
                                        title="Euro Training Contact Number"
                                        href="https://wa.me/00447492882996"
                                        target="_blank"
                                        rel="noreferrer">
                                        <i className="fas fa-phone-alt pe-1"></i>
                                        +44 7492 8829 96
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
