import { Link } from "react-router-dom";
import comp from "../../../Images/comp/comp.png";
import comp2 from "../../../Images/comp/comp2.png";
import comp3 from "../../../Images/comp/comp3.png";
import comp4 from "../../../Images/comp/comp4.png";

const Comp = () => {
    return (
        <div className="my-5">
            <div className="grid place-items-center">
                <div className="grid grid-cols-3 gap-4 p-5 max-w-screen-lg">
                    <div className=" rounded-lg col-span-3">
                        <img src={comp} alt="" />
                    </div>
                    <div className=" rounded-lg col-span-2">
                        <img src={comp3} alt="" />
                    </div>
                    <div className=" rounded-lg row-span-2">
                        <img src={comp4} alt="" />
                    </div>
                    <div className=" rounded-lg col-span-2">
                        <img src={comp2} alt="" />
                    </div>
                </div>
            </div>
            <div className="grid place-items-center">
                <div className="text-center max-w-screen-lg">
                    <h1 className=" text-5xl font-bold my-5 text-accent">
                        ComponentXperts
                    </h1>
                    <p>
                        ComponentXperts is a web application that allows users
                        to build their dream PC by selecting components from
                        various categories like CPU, Motherboard, RAM, Power
                        Supply Unit, Storage Device, and Monitor.
                    </p>
                </div>
                <div>
                    <h1 className="text-2xl text-center font-bold mt-5">
                        Technologies <span className="text-accent">Used</span>
                    </h1>
                    <div className="text-center pt-5 px-10">
                        <div className="badge mx-2">NextJS</div>
                        <div className="badge mx-2">ReactJS</div>
                        <div className="badge mx-2">React Icons</div>
                        <div className="badge mx-2">Tailwind</div>
                        <div className="badge mx-2">DaisyUi</div>
                        <div className="badge mx-2">ExpressJS</div>
                        <div className="badge mx-2">MongoDB</div>
                        <div className="badge mx-2">Git</div>
                    </div>
                </div>
                <div className="flex">
                    <Link
                        className="pt-5 px-2"
                        to={{
                            pathname: "//component-xperts.vercel.app/",
                        }}
                        target="_blank"
                    >
                        <button className="btn btn-accent px-10">Visit</button>
                    </Link>
                    <Link
                        className="pt-5 px-2"
                        to={{
                            pathname: "//github.com/zhSHUVO/ComponentXperts",
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

export default Comp;
