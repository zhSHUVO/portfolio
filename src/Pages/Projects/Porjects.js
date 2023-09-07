import { Link } from "react-router-dom";
import book from "../../Images/bookshelf/book.png";
import comp from "../../Images/comp/comp.png";
import fabric from "../../Images/fabric/fabric.png";
import remc from "../../Images/remc/remc.png";
import shop from "../../Images/shop/shop.png";
import t3 from "../../Images/t3/t3.png";

const Porjects = () => {
    return (
        <div id="projectsection">
            <h1 className="text-center text-5xl font-bold mt-10 mb-5">
                My <span className="text-accent">Projects</span>
            </h1>
            {/* <div className="flex flex-col lg:flex-row justify-evenly items-center"> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 justify-items-center items-center">
                {/* REMC */}
                <div>
                    <div className="card card-compact lg:w-96 lg:mb-0 mb-5 w-80 bg-base-100 shadow-xl">
                        <figure>
                            <img src={remc} alt="project" />
                        </figure>
                        <div className="card-body">
                            <div className="flex items-center">
                                <h2 className="card-title">REMC</h2>
                                <div className=" mx-2">
                                    <div className="badge badge-outline badge-sm  mx-1">
                                        MERN
                                    </div>
                                    <div className="badge badge-outline badge-sm">
                                        Stripe
                                    </div>
                                </div>
                            </div>
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

                {/* Fabric */}
                <div>
                    <div className="card card-compact lg:w-96 lg:mb-0 mb-5 w-80 bg-base-100 shadow-xl">
                        <figure>
                            <img src={fabric} alt="project" />
                        </figure>
                        <div className="card-body">
                            <div className="flex items-center">
                                <h2 className="card-title">Fabric House</h2>
                                <div className=" mx-2">
                                    <div className="badge badge-outline badge-sm  mx-1">
                                        MERN
                                    </div>
                                    <div className="badge badge-outline badge-sm">
                                        Firebase
                                    </div>
                                </div>
                            </div>
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

                {/* BookShelf */}
                <div>
                    <div className="card card-compact lg:w-96 lg:mb-0 mb-5 w-80 bg-base-100 shadow-xl">
                        <figure>
                            <img src={book} alt="project" />
                        </figure>
                        <div className="card-body">
                            <div className="flex items-center">
                                <h2 className="card-title">BookShelf</h2>
                                <div className=" mx-2">
                                    <div className="badge badge-outline badge-sm  mx-1">
                                        MERN
                                    </div>
                                    <div className="badge badge-outline badge-sm">
                                        Typescript
                                    </div>
                                </div>
                            </div>
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

                {/* compo */}
                <div>
                    <div className="card card-compact lg:w-96 lg:mb-0 mb-5 w-80 bg-base-100 shadow-xl">
                        <figure>
                            <img src={comp} alt="project" />
                        </figure>
                        <div className="card-body">
                            <div className="flex items-center">
                                <h2 className="card-title">ComponentXperts</h2>
                                <div className=" mx-2">
                                    <div className="badge badge-outline badge-sm  mx-1">
                                        NextJS
                                    </div>
                                    <div className="badge badge-outline badge-sm">
                                        Redux
                                    </div>
                                </div>
                            </div>
                            <p>Build the dream pc you've always wanted</p>
                            <div className="card-actions justify-end">
                                <Link to="/componentxperts">
                                    <button className="btn btn-accent">
                                        Details
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* shop */}
                <div>
                    <div className="card card-compact lg:w-96 lg:mb-0 mb-5 w-80 bg-base-100 shadow-xl">
                        <figure>
                            <img src={shop} alt="project" />
                        </figure>
                        <div className="card-body">
                            <div className="flex items-center">
                                <h2 className="card-title">Shop Dash</h2>
                                <div className=" mx-2">
                                    <div className="badge badge-outline badge-sm  mx-1">
                                        NextJS
                                    </div>
                                    <div className="badge badge-outline badge-sm">
                                        Mongoose
                                    </div>
                                </div>
                            </div>
                            <p>Shop your electronic needs</p>
                            <div className="card-actions justify-end">
                                <Link to="/shopdash">
                                    <button className="btn btn-accent">
                                        Details
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* t3 */}
                <div>
                    <div className="card card-compact lg:w-96 lg:mb-0 mb-5 w-80 bg-base-100 shadow-xl">
                        <figure>
                            <img src={t3} alt="project" />
                        </figure>
                        <div className="card-body">
                            <div className="flex items-center">
                                <h2 className="card-title">T3 PLUS</h2>
                                <div className="mx-2">
                                    <div className="badge badge-outline badge-sm mx-1">
                                        ReactJS
                                    </div>
                                    <div className="badge badge-outline badge-sm mx-1">
                                        React Router
                                    </div>
                                </div>
                            </div>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <Link
                    className="pt-5 px-2"
                    to={{
                        pathname: "//github.com/zhSHUVO/",
                    }}
                    target="_blank"
                >
                    <button className="btn btn-accent px-10">
                        More on GitHub
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Porjects;
