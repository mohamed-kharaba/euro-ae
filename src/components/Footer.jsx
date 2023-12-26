import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
const footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-3">
                        <div className="box">
                            <a href="<?php echo $slash; ?>" title="Euro Training">
                                <img src={Logo} alt="Euro Training" className="w-75 h-75" />
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-5">
                        <div className="box">
                            <h4 className="title-footer">Our Courses</h4>
                            <ul className="list-lltc">
                                <li>
                                    <Link reloadDocument className="link-list-footer" title="Euro Training - About Us" to={"/about"}>
                                        About us
                                    </Link>
                                </li>
                                <li>
                                    <Link reloadDocument className="link-list-footer" title="Euro Training - About Us" to={"/contact"}>
                                        Contact us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <div className="box">
                            <h4 className="title-footer">Get in touch</h4>
                            <div className="contact">
                                <div className="contact-item">
                                    <div>
                                        <i className="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div>Dubai - UAE</div>
                                </div>
                                <div className="contact-item">
                                    <div>
                                        <i className="fas fa-phone-alt"></i>
                                    </div>
                                    <div>
                                        <a
                                            className=""
                                            title="Euro Training Contact Number"
                                            href="https://wa.me/00447492882996"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            +44 7492 8829 96
                                        </a>
                                    </div>
                                </div>
                                <div className="contact-item">
                                    <div>
                                        <i className="far fa-envelope"></i>
                                    </div>
                                    <div>
                                        <a className="" title="Euro Training Email Address" href="mailto:sales@lltc.co">
                                            info@euro-training.net
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="social"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copy">
                <div className="container">
                    <div className="box">
                        <div className="row justify-content-start">
                            <div className="col-sm-12 col-md-4"></div>
                            <div className="col-sm-12 col-md-4">
                                <div className="copy-one text-center">
                                    <span>Copyright Euro Training © 2024</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default footer;
