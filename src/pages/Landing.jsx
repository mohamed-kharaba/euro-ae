import { Link } from "react-router-dom";

import slide2 from "../assets/images/slide2.jpg";
import LE1005 from "../assets/images/courses/LE1005.jpg";
import CS1011 from "../assets/images/courses/CS1011.jpg";
import CS1012 from "../assets/images/courses/CS1012.jpg";

const Landing = () => {
    return (
        <>
            <div className="slide-up">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-lltc carousel-item active">
                            <img src={slide2} className="d-block w-100" alt="Euro Training" />
                            <div className="carousel-caption-lltc carousel-caption d-none d-md-block">
                                <h2 className="city-title-slider">Euro Training</h2>
                                <h6 className="course-title-slider">Choose The course Training of your favor</h6>
                                <Link title="" to={"/programs"} className="btn btn-lltc mt-3">
                                    Show Courses
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="home-page">
                {/* <!-- cities --> */}
                <div className="cities">
                    <div className="container">
                        <div className="grid-cities">
                            <div className="row g-4">
                                <div className="col-sm-12 col-lg-3">
                                    <div className="box-city info">
                                        <h4>Course</h4>
                                        <h3>Find your course</h3>
                                        <p></p>
                                        <Link reloadDocument title="Euro Training" to={"/programs"} className="btn btn-lltc">
                                            Explore all course
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-sm-12 col-lg-3">
                                    <div className="box-city tow">
                                        <Link to="programs/1" title="" reloadDocument>
                                            <img src={CS1012} alt="Euro Training" className="w-100" />
                                            <span className="city-name">The Leadership Challenge: Inspire, Enable and Encourage</span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-lg-3">
                                    <div className="box-city tow">
                                        <Link to="programs/2" title="" reloadDocument>
                                            <img src={LE1005} alt="Euro Training" className="w-100" />
                                            <span className="city-name">Financial Analysis , Planning & Control</span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-lg-3">
                                    <div className="box-city tow">
                                        <Link reloadDocument to="programs/3" title="">
                                            <img src={CS1011} alt="Euro Training" className="w-100" />
                                            <span className="city-name">Sustaining a Motivating Work Culture</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- About --> */}
                <div className="about-us">
                    <div className="container">
                        <div className="about-inn">
                            <div className="about-info">
                                <h1>Euro Training Center</h1>
                                <ul className="list-lltc">
                                    <li>Globalization</li>
                                    <li>Methodological Thinking</li>
                                    <li>Dynamism & Flexibility</li>
                                    <li>Customer Focus</li>
                                    <li>Continuous Development</li>
                                    <li>Achievement &Leadership</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Landing;
