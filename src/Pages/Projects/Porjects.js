import { Link } from "react-router-dom";
import book from "../../Images/bookshelf/book.png";
import fabric from "../../Images/fabric/fabric.png";
import remc from "../../Images/remc/remc.png";

const Porjects = () => {
    return (
        <div id="projectsection">
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
                            <p>
                                Empowering Electronic Commerce with Seamlessness
                            </p>
                            <div className="card-actions justify-end">
                                <Link to="/remc">
                                    <button className="btn btn-accent">
                                        Details
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
                            <p>Fabric Hourse, warehouse for fabrics storage</p>
                            <div className="card-actions justify-end">
                                <Link to="/fabric">
                                    <button className="btn btn-accent">
                                        Details
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="card card-compact lg:w-96 lg:mb-0 mb-5 w-80 bg-base-100 shadow-xl">
                        <figure>
                            <img src={book} alt="project" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">BookShelf</h2>
                            <p>BookShelf - Where Words Come to Life</p>
                            <div className="card-actions justify-end">
                                <Link to="/bookshelf">
                                    <button className="btn btn-accent">
                                        Details
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
