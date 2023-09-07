import React from "react";
import { Link } from "react-router-dom";
import shop from "../../../Images/shop/shop.png";
import shop2 from "../../../Images/shop/shop2.png";
import shop3 from "../../../Images/shop/shop3.png";
import shop4 from "../../../Images/shop/shop4.png";

const Shop = () => {
    return (
        <div className="my-5">
            <div className="grid place-items-center">
                <div className="grid grid-cols-3 gap-4 p-5 max-w-screen-lg">
                    <div className=" rounded-lg col-span-3">
                        <img src={shop} alt="" />
                    </div>
                    <div className=" rounded-lg col-span-2">
                        <img src={shop2} alt="" />
                    </div>
                    <div className=" rounded-lg row-span-2">
                        <img src={shop4} alt="" />
                    </div>
                    <div className=" rounded-lg col-span-2">
                        <img src={shop3} alt="" />
                    </div>
                </div>
            </div>
            <div className="grid place-items-center">
                <div className="text-center max-w-screen-lg">
                    <h1 className=" text-5xl font-bold my-5 text-accent">
                        Shop Dash
                    </h1>
                    <p>
                        Shop Dash is an e-commerce web application built with
                        Next.js and MongoDB. It allows users to browse and
                        purchase various products, manage their shopping cart,
                        and place orders. The application also includes
                        authentication using NextAuth.js to provide a secure and
                        personalized shopping experience.
                    </p>
                </div>
                <div>
                    <h1 className="text-2xl text-center font-bold mt-5">
                        Technologies <span className="text-accent">Used</span>
                    </h1>
                    <div className="text-center pt-5 px-10">
                        <div className="badge mx-2">NextJS</div>
                        <div className="badge mx-2">ReactJS</div>
                        <div className="badge mx-2">NextAuth</div>
                        <div className="badge mx-2">Tailwind</div>
                        <div className="badge mx-2">DaisyUi</div>
                        <div className="badge mx-2">ExpressJS</div>
                        <div className="badge mx-2">MongoDB</div>
                        <div className="badge mx-2">Mongoose</div>
                        <div className="badge mx-2">Git</div>
                    </div>
                </div>
                <div className="flex">
                    <Link
                        className="pt-5 px-2"
                        to={{
                            pathname: "//shop-dash.vercel.app/",
                        }}
                        target="_blank"
                    >
                        <button className="btn btn-accent px-10">Visit</button>
                    </Link>
                    <Link
                        className="pt-5 px-2"
                        to={{
                            pathname: "//github.com/zhSHUVO/shop-dash",
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

export default Shop;
