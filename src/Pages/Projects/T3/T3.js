import { Link } from "react-router-dom";
import t3 from "../../../Images/t3/t3.png";
import t31 from "../../../Images/t3/t31.png";
import t32 from "../../../Images/t3/t32.png";
import t33 from "../../../Images/t3/t33.png";

const T3 = () => {
    return (
        <div className="my-5">
            <div className="grid place-items-center">
                <div className="grid grid-cols-3 gap-4 p-5 max-w-screen-lg">
                    <div className=" rounded-lg col-span-3">
                        <img src={t3} alt="" />
                    </div>
                    <div className=" rounded-lg col-span-2">
                        <img src={t31} alt="" />
                    </div>
                    <div className=" rounded-lg row-span-2">
                        <img src={t33} alt="" />
                    </div>
                    <div className=" rounded-lg col-span-2">
                        <img src={t32} alt="" />
                    </div>
                </div>
            </div>
            <div className="grid place-items-center">
                <div className="text-center max-w-screen-lg">
                    <h1 className=" text-5xl font-bold my-5 text-accent">
                        TIN HIHI T3
                    </h1>
                    <p>
                        This is a single product review website. Here we have
                        the item itself and some user review. Also we have some
                        graph or chart.
                    </p>
                </div>
                <div>
                    <h1 className="text-2xl font-bold mt-5">
                        Technologies <span className="text-accent">Used</span>
                    </h1>
                    <ul className="list-disc flex flex-col items-center">
                        <li>react</li>
                        <li>react router</li>
                        <li>rechart</li>
                        <li>Netlify</li>
                        <li>Git</li>
                    </ul>
                </div>
                <Link
                    className="pt-5"
                    to={{
                        pathname: "//t3-plus.netlify.app/",
                    }}
                    target="_blank"
                >
                    <button className="btn btn-accent">Visit</button>
                </Link>
            </div>
        </div>
    );
};

export default T3;
