import { Link } from "react-router-dom";
import fabric from "../../../Images/fabric/fabric.png";
import fabric2 from "../../../Images/fabric/fabric2.png";
import fabric3 from "../../../Images/fabric/fabric3.png";
import fabric4 from "../../../Images/fabric/fabric4.png";

const Fabric = () => {
    return (
        <div className="my-5">
            <div className="grid place-items-center">
                <div className="grid grid-cols-3 gap-4 p-5 max-w-screen-lg">
                    <div className=" rounded-lg col-span-3">
                        <img src={fabric} alt="" />
                    </div>
                    <div className=" rounded-lg col-span-2">
                        <img src={fabric3} alt="" />
                    </div>
                    <div className=" rounded-lg row-span-2">
                        <img src={fabric4} alt="" />
                    </div>
                    <div className=" rounded-lg col-span-2">
                        <img src={fabric2} alt="" />
                    </div>
                </div>
            </div>
            <div className="grid place-items-center">
                <div className="text-center max-w-screen-lg">
                    <h1 className=" text-5xl font-bold my-5 text-accent">
                        Fabric House
                    </h1>
                    <p>
                        This website is made for a warehouse storage. Here user
                        can store their fabric related products, like dresses,
                        sheets and etc. User can restock or deliver items to
                        their customers. Stock value will change according to
                        restock or delivery. User can add new products to their
                        stock.
                    </p>
                </div>
                <div>
                    <h1 className="text-2xl text-center font-bold mt-5">
                        Technologies <span className="text-accent">Used</span>
                    </h1>
                    <div className="text-center pt-5 px-10">
                        <div class="badge mx-2">ReactJS</div>
                        <div class="badge mx-2">React Router</div>
                        <div class="badge mx-2">React Icons</div>
                        <div class="badge mx-2">React Queries</div>
                        <div class="badge mx-2">React Firebase Hooks</div>
                        <div class="badge mx-2">Bootstrap</div>
                        <div class="badge mx-2">React Bootstrap</div>
                        <div class="badge mx-2">MongoDB</div>
                        <div class="badge mx-2">MongoDB Atlas</div>
                        <div class="badge mx-2">JWT</div>
                        <div class="badge mx-2">Firebase</div>
                        <div class="badge mx-2">Git</div>
                    </div>
                </div>
                <Link
                    className="pt-5"
                    to={{
                        pathname: "//fabric-house-99700.web.app/",
                    }}
                    target="_blank"
                >
                    <button className="btn btn-accent px-10">Visit</button>
                </Link>
            </div>
        </div>
    );
};

export default Fabric;
