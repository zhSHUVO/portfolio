import React from "react";
import { Link } from "react-router-dom";
import profileimage from "../../Images/profile.jpeg";

const About = () => {
    return (
        <div>
            {/* hero section */}
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={profileimage}
                        className="max-w-xl rounded-2xl shadow-2xl lg:mr-10"
                        alt="profile"
                    />
                    <div className="flex flex-col items-center ">
                        <h1 className="text-5xl font-bold">
                            I'M SHUVO. WEB DEVELOPER
                        </h1>
                        <p className="py-6">
                            My full name is Md. Zayed Hassan Bhuiyan. I live in
                            Dhaka. I'm a student of computer science at the
                            University of Daffodil.
                        </p>

                        <Link
                            className="lg:place-self-start"
                            to={{
                                pathname:
                                    "//drive.google.com/file/d/1ZKqJlsLmU5XSSUES54l0SGhu1bsL4EbZ/view?usp=sharing",
                            }}
                            target="_blank"
                        >
                            <button className="btn">
                                Download Resume{" "}
                                <svg
                                    className="pl-3"
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 512 512"
                                    width="2em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path>
                                </svg>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* about me section */}
            <div className="py-10">
                <h1 className="text-center text-5xl font-bold">About Me</h1>
                <div className="flex justify-evenly">
                    <div className="lg:flex content-center items-center">
                        <div>
                            <div className="lg:mr-10 my-7">
                                <h1 className="text-center text-2xl font-bold mb-2">
                                    PERSONAL INFOS
                                </h1>
                                <div className="flex justify-center">
                                    <div className="mr-5">
                                        <p>
                                            First Name:{" "}
                                            <span className="font-bold">
                                                Zayed Hassan
                                            </span>
                                        </p>
                                        <p>
                                            Age:{" "}
                                            <span className="font-bold">
                                                23 Years
                                            </span>
                                        </p>
                                        <p>
                                            Freelance:{" "}
                                            <span className="font-bold">
                                                Available
                                            </span>
                                        </p>
                                        <p>
                                            Phone:{" "}
                                            <span className="font-bold">
                                                +8801869515881
                                            </span>
                                        </p>
                                        <Link
                                            className="lg:place-self-start"
                                            to={{
                                                pathname:
                                                    "//www.linkedin.com/in/zhshuvo/",
                                            }}
                                            target="_blank"
                                        >
                                            <p className="flex items-center">
                                                LinkedIn:{" "}
                                                <span className="font-bold">
                                                    zhshuvo
                                                </span>
                                            </p>
                                        </Link>
                                    </div>
                                    <div>
                                        <p>
                                            Last Name:{" "}
                                            <span className="font-bold">
                                                Bhuiyan
                                            </span>
                                        </p>
                                        <p>
                                            Nationality:{" "}
                                            <span className="font-bold">
                                                Bangladeshi
                                            </span>
                                        </p>
                                        <p>
                                            Address:{" "}
                                            <span className="font-bold">
                                                Dhaka
                                            </span>
                                        </p>
                                        <p>
                                            Email:{" "}
                                            <span className="font-bold">
                                                zayedhassanbhuiyan@gmail.com
                                            </span>
                                        </p>
                                        <Link
                                            className="lg:place-self-start"
                                            to={{
                                                pathname:
                                                    "//github.com/zhSHUVO",
                                            }}
                                            target="_blank"
                                        >
                                            <p className="flex items-center">
                                                GitHub:{" "}
                                                <span className="font-bold">
                                                    zhSHUVO
                                                </span>
                                            </p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="card  glass w-96 shadow-xl">
                                    <div className="card-body text-center">
                                        <h1 className="text-center text-8xl font-bold">
                                            5+
                                        </h1>
                                        <p>Years of experience</p>
                                    </div>
                                </div>
                                <div className="card  glass w-96 shadow-xl">
                                    <div className="card-body text-center">
                                        <h1 className="text-center text-8xl font-bold">
                                            12+
                                        </h1>
                                        <p>Completed projects</p>
                                    </div>
                                </div>
                                <div className="card  glass w-96 shadow-xl">
                                    <div className="card-body text-center">
                                        <h1 className="text-center text-8xl font-bold">
                                            15+
                                        </h1>
                                        <p>Happy customer</p>
                                    </div>
                                </div>
                                <div className="card  glass w-96 shadow-xl">
                                    <div className="card-body text-center">
                                        <h1 className="text-center text-8xl font-bold">
                                            21+
                                        </h1>
                                        <p>Challenges won</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
