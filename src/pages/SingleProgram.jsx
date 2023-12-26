import { useParams } from "react-router-dom";
import { courses } from "../data";

const SingleProgram = () => {
    const { id } = useParams();

    const course = courses.find((course) => course.id === parseInt(id));

    if (!course) {
        return <div>Course not found</div>;
    }

    const { title, over } = course;

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
                                        title="Training Programs Euro Trining">
                                        {title}
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="course">
                <div className="container">{over}</div>
            </div>
        </>
    );
};

export default SingleProgram;
