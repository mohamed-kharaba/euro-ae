import vision from "../assets/images/about/vision.jpg";
import mission from "../assets/images/about/mission.jpg";
import Objectives from "../assets/images/about/Objectives.jpg";

const About = () => {
    return (
        <>
            <div className="slide-up-inner">
                <div className="big_titles2">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12"></div>
                            <div className="col-md-6">
                                <div className="title-inn-slide">
                                    <h1 itemProp="name" title="About Euro Trining">
                                        About us
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about" id="about">
                {/* <!-- about --> */}
                <div className="about-inn">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-10">
                                <p>
                                    We are committed to deliver the very latest business knowledge to our clients. Our services encourage the quality
                                    of learning, empower clients to deepen their knowledge and engage them in the learning process. Furthermore,
                                    developing their skills and enhance their career potential. We additionally provide unrestricted access to our
                                    Knowledge Resources Centre that offers a variety of management tools, book reviews, insights that unpack the
                                    latest industry news and features written by leading business professionals.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Vision --> */}
                <div className="container" id="vision">
                    <div className="vision">
                        <div className="row">
                            <div className="col-sm-12 col-md-8">
                                <div className="info">
                                    <h3>QUALITY</h3>
                                    <p>
                                        We aim to provide quality – driven services and exceptional customers care. Our commitment to deliver training
                                        and development to excellence level is seen in the accomplishments of our esteemed Centre, as of our notable
                                        accreditations and affiliations. And in our provision of thoughtful services which can be applied to the
                                        changing marketplace. We insist on our clients for feedback reviews in order to improve and continuously try
                                        to achieve the higher standards of excellenc
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-4">
                                <div className="image">
                                    <img src={vision} alt="Euro Trining" className="w-100" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- INNOVATION --> */}
                <div className="container">
                    <div className="Mission" id="mission">
                        <div className="row">
                            <div className="col-sm-12 col-md-4">
                                <div className="image">
                                    <img src={mission} alt="Euro Trining" className="w-100" />
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-8">
                                <div className="info">
                                    <h3>INNOVATION</h3>
                                    <p>
                                        We are determined to be innovative and creative in all that we do. Our services encourage clients to think
                                        outside the box, find new business opportunities and have forward thinking visions and strategies. By
                                        providing tailored solutions for clients, we look at a problem from multiple perspectives to ensure our
                                        solutions are dynamic, impactful and appropriate for our client’s needs. Our commitment to encourage a culture
                                        of creativity and innovation has enabled us to empower individuals and organizations toward greater heights.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- RESPECT --> */}
                <div className="container">
                    <div className="Objectives" id="objectives">
                        <div className="row">
                            <div className="col-sm-12 col-md-8">
                                <div className="info">
                                    <h3>RESPECT</h3>
                                    <p>
                                        We are committed to broaden learning and development by hosting individuals and organizations from various
                                        sectors, demographics and cultures. As a multicultural organization with a global client base, we welcome
                                        informed perspectives from our clients as from our suppliers and partners. We take into consideration the
                                        cultural requirements of our clients and ensure that our services are served with highest respect and ethics.
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-4">
                                <div className="image">
                                    <img src={Objectives} alt="Euro Trining" className="w-100" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
