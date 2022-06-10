import { Link } from "react-router-dom";
import fabric from "../../Images/fabric/fabric.png";
import remc from "../../Images/remc/remc.png";
import t3 from "../../Images/t3/t3.png";

const Porjects = () => {
    return (
        <div>
            <h1 className="text-center text-5xl font-bold mt-10 mb-5">
                My <span className="text-accent">Projects</span>
            </h1>
            <div className="flex flex-col lg:flex-row justify-evenly items-center">
                <div>
                    <div className="card card-compact lg:w-96 lg:mb-0 mb-5 w-80 bg-base-100 shadow-xl">
                        <figure>
                            <img src={remc} alt="project" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">REMC</h2>
                            <p>Website for manufacturing company</p>
                            <div className="card-actions justify-end">
                                <Link to="/remc">
                                    <button className="btn btn-accent">
                                        Details
                                    </button>
                                </Link>
                                <Link
                                    to={{
                                        pathname:
                                            "//rem-company.firebaseapp.com/",
                                    }}
                                    target="_blank"
                                >
                                    <button className="btn btn-accent">
                                        Visit
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card card-compact lg:w-96 lg:mb-0 mb-5 w-80 bg-base-100 shadow-xl">
                        <figure>
                            <img src={fabric} alt="project" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Fabric House</h2>
                            <p>
                                Dress warehouse for the celebrations like eid,
                                weading
                            </p>
                            <div className="card-actions justify-end">
                                <Link to="/fabric">
                                    <button className="btn btn-accent">
                                        Details
                                    </button>
                                </Link>
                                <Link
                                    to={{
                                        pathname:
                                            "//fabric-house-99700.web.app/",
                                    }}
                                    target="_blank"
                                >
                                    <button className="btn btn-accent">
                                        Visit
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="card card-compact lg:w-96 lg:mb-0 mb-5 w-80 bg-base-100 shadow-xl">
                        <figure>
                            <img src={t3} alt="project" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">T3 PLUS</h2>
                            <p>
                                Website dedicated to the beautiful Tin Hifi T3
                                Plus
                            </p>
                            <div className="card-actions justify-end">
                                <Link to="/t3">
                                    <button className="btn btn-accent">
                                        Details
                                    </button>
                                </Link>
                                <Link
                                    to={{
                                        pathname: "//t3-plus.netlify.app/",
                                    }}
                                    target="_blank"
                                >
                                    <button className="btn btn-accent">
                                        Visit
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Porjects;
