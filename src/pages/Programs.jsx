import { courses } from "../data";

import DetProgram from "./DetProgram";
const Programs = () => {
    const dataPro = courses.map((item) => {
        const { id, title, over } = item;
        return {
            id: id,
            title: title,
            over: over,
        };
    });
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
                                        Training Programs
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="single-cat">
                <div className="container">
                    <div className="row">
                        {dataPro.map((item) => {
                            return <DetProgram key={item.id} {...item} />;
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Programs;
