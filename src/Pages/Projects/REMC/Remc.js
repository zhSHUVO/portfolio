import { Link } from "react-router-dom";
import remc from "../../../Images/remc/remc.png";
import remc1 from "../../../Images/remc/remc1.png";
import remc2 from "../../../Images/remc/remc2.png";
import remc4 from "../../../Images/remc/remc4.png";
import "./Remc.css";

const Remc = () => {
    return (
        <div className="my-5">
            <div className="grid place-items-center">
                <div className="grid grid-cols-3 gap-4 p-5 max-w-screen-lg">
                    <div className=" rounded-lg col-span-3">
                        <img src={remc} alt="" />
                    </div>
                    <div className=" rounded-lg col-span-2">
                        <img src={remc1} alt="" />
                    </div>
                    <div className=" rounded-lg row-span-2">
                        <img src={remc4} alt="" />
                    </div>
                    <div className=" rounded-lg col-span-2">
                        <img src={remc2} alt="" />
                    </div>
                </div>
            </div>
            <div className="grid place-items-center">
                <div className="text-center max-w-screen-lg">
                    <h1 className=" text-5xl font-bold my-5 text-accent">
                        Root Electronics and Manufacturing Company
                    </h1>
                    <p>
                        The REMC project is a full-stack web application that
                        provides a platform for managing and selling electronic
                        products. It consists of a frontend client application
                        and a backend server application. The frontend is built
                        using React and is responsible for the user interface
                        and interactions, while the backend is built using
                        Express.js and MongoDB and handles the data storage,
                        authentication, and payment processing.
                    </p>
                </div>
                <div>
                    <h1 className="text-2xl text-center font-bold mt-5">
                        Technologies <span className="text-accent">Used</span>
                    </h1>
                    <div className="text-center pt-5 px-10">
                        <div className="badge mx-2">ReactJS</div>
                        <div className="badge mx-2">React Router</div>
                        <div className="badge mx-2">React Icons</div>
                        <div className="badge mx-2">React Queries</div>
                        <div className="badge mx-2">React Firebase Hooks</div>
                        <div className="badge mx-2">Tailwin</div>
                        <div className="badge mx-2">DaisyUI</div>
                        <div className="badge mx-2">MongoDB</div>
                        <div className="badge mx-2">JWT</div>
                        <div className="badge mx-2">Firebase</div>
                        <div className="badge mx-2">Stripe</div>
                        <div className="badge mx-2">Railway</div>
                        <div className="badge mx-2">Git</div>
                    </div>
                </div>
                <div className="flex">
                    <Link
                        className="pt-5 px-2"
                        to={{
                            pathname: "//rem-company.firebaseapp.com/",
                        }}
                        target="_blank"
                    >
                        <button className="btn btn-accent px-10">Visit</button>
                    </Link>
                    <Link
                        className="pt-5 px-2"
                        to={{
                            pathname: "//github.com/zhSHUVO/remc",
                        }}
                        target="_blank"
                    >
                        <button className="btn btn-accent px-10">GitHub</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Remc;
