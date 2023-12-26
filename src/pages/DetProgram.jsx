import { Link } from "react-router-dom";
const DetProgram = ({ id, title }) => {
    return (
        <>
            <div className="col-sm-6">
                <div className="box">
                    <Link to={`/programs/${id}`} id={id}>
                        <h5 itemProp="name" className="title-course">
                            {title}
                        </h5>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default DetProgram;
