const Contact = () => {
    return (
        <>
            <div className="slide-up-inner">
                <div className="big_titles2">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12"></div>
                            <div className="col-md-6">
                                <div className="title-inn-slide">
                                    <h1
                                        itemProp="name"
                                        title="Contact Euro Trining">
                                        Contact us
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact-us">
                <div className="container">
                    <div className="info-data">
                        <div className="row">
                            <div className="col-sm-12 offset-4 col-md-5">
                                <div className="info">
                                    <h4>Contact</h4>
                                    <h1>Get in touch with us</h1>
                                    <div className="communicate">
                                        <div className="box">
                                            <div className="icon">
                                                <i className="fas fa-phone-volume fa-lg"></i>
                                            </div>
                                            <div className="det">
                                                <h4>Call us on</h4>
                                                <span>
                                                    <a
                                                        className=""
                                                        title=" Contact Number"
                                                        href="https://wa.me/00447492882996"
                                                        target="_blank"
                                                        rel="noreferrer">
                                                        +44 7492 8829 96
                                                    </a>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="box">
                                            <div className="icon">
                                                <i className="fas fa-envelope"></i>
                                            </div>
                                            <div className="det">
                                                <h4>Email us directly</h4>
                                                <span>
                                                    info@euro-training.net
                                                </span>
                                            </div>
                                        </div>
                                        <div className="box">
                                            <div className="icon">
                                                <i className="fas fa-map-marker-alt"></i>
                                            </div>
                                            <div className="det">
                                                <h4>Our Location</h4>
                                                <span>Dubai - UAE</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
