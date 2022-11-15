import { Link } from "react-router-dom";
import profileimage from "../../Images/profile.jpeg";

const About = () => {
    return (
        <div>
            {/* hero section */}
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row ">
                    <img
                        src={profileimage}
                        className="lg:max-w-xl rounded-2xl shadow-2xl lg:mr-10"
                        alt="profile"
                    />
                    <div className="flex flex-col items-center ">
                        <h1 className="text-5xl font-bold text-center lg:text-left">
                            <span className="text-accent">HI,</span> <br />
                            I'M ZAYED. A JUNIOR WEB DEVELOPER
                        </h1>
                        <p className="py-6 text-center lg:text-left">
                            My full name is Md. Zayed Hassan Bhuiyan. I live in
                            Dhaka, Bangladesh. I'm a student of computer science
                            at the University of Daffodil.
                        </p>

                        <Link
                            className="lg:place-self-start"
                            to={{
                                pathname:
                                    "//drive.google.com/file/d/1ZKqJlsLmU5XSSUES54l0SGhu1bsL4EbZ/",
                            }}
                            target="_blank"
                        >
                            <button className="btn bg-accent">
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
            <div id="aboutsection" className="pt-10">
                <h1 className="text-center text-5xl font-bold">
                    About <span className="text-accent">Me</span>
                </h1>
                <div className="flex flex-col items-center py-3">
                    <p className="text-center w-4/5	pb-2 lg:w-3/5">
                        I consider myself a junior web Developer. Currently I'm
                        a undergraduate at Daffodil International University.
                        I'm still learning and trying to improve myself.
                    </p>
                    <p className="text-center w-4/5 lg:w-3/5">
                        I'm a dependable person and hardworking. I'm honest,
                        flexible and reliable. Here some of my information.
                    </p>
                </div>
                <div className="flex justify-evenly">
                    <div className="lg:flex content-center items-center">
                        <div>
                            <div className="lg:mr-10 my-7">
                                <h1 className="text-center text-2xl font-bold mb-2">
                                    PERSONAL INFOS
                                </h1>
                                <div className="flex flex-col lg:flex-row justify-evenly">
                                    <div className="mr-5">
                                        <p>
                                            First Name:{" "}
                                            <span className="font-bold">
                                                Zayed Hassan
                                            </span>
                                        </p>
                                        <p>
                                            Last Name:{" "}
                                            <span className="font-bold">
                                                Bhuiyan
                                            </span>
                                        </p>
                                        <p>
                                            Age:{" "}
                                            <span className="font-bold">
                                                23 Years
                                            </span>
                                        </p>
                                        <p>
                                            Open for Job:{" "}
                                            <span className="font-bold">
                                                Yes
                                            </span>
                                        </p>
                                        <p>
                                            Phone:{" "}
                                            <span className="font-bold">
                                                +8801869515881
                                            </span>
                                        </p>
                                    </div>
                                    <div>
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
                                            className="lg:place-self-start "
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
                            <h1 className="text-center text-2xl font-bold mb-2">
                                I CAN DO
                            </h1>
                            <div className="grid grid-cols-2 gap-4 lg:mt-5">
                                <div className="card  bg-base-100 lg:w-96  w-36 shadow-xl">
                                    <div className="card-body flex items-center">
                                        <svg
                                            className=""
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 24 24"
                                            height="5em"
                                            width="5em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M20,4H4C2.897,4,2,4.897,2,6v12c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2V6C22,4.897,21.103,4,20,4z M4,18V6h16 l0.001,12H4z"></path>
                                            <path d="M6.5 11h3c.276 0 .5-.224.5-.5v-2C10 8.224 9.776 8 9.5 8h-3C6.224 8 6 8.224 6 8.5v2C6 10.776 6.224 11 6.5 11zM6 14H12V16.001H6zM13 14H18V16.001H13z"></path>
                                        </svg>
                                        <p>Front End Development</p>
                                    </div>
                                </div>
                                <div className="card  bg-base-100 lg:w-96  w-36 shadow-xl">
                                    <div className="card-body flex items-center">
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 16 16"
                                            height="5em"
                                            width="5em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.854 4.146a.5.5 0 010 .708L1.707 8l3.147 3.146a.5.5 0 01-.708.708l-3.5-3.5a.5.5 0 010-.708l3.5-3.5a.5.5 0 01.708 0zm6.292 0a.5.5 0 000 .708L14.293 8l-3.147 3.146a.5.5 0 00.708.708l3.5-3.5a.5.5 0 000-.708l-3.5-3.5a.5.5 0 00-.708 0zm-.999-3.124a.5.5 0 01.33.625l-4 13a.5.5 0 01-.955-.294l4-13a.5.5 0 01.625-.33z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                        <p>Backend Development</p>
                                    </div>
                                </div>
                                <div className="card  bg-base-100 lg:w-96  w-36 shadow-xl">
                                    <div className="card-body flex items-center">
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 24 24"
                                            height="5em"
                                            width="5em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M5 5L10 5 10 3 3 3 3 10 5 10zM10 19L5 19 5 14 3 14 3 21 10 21zM21 14L19 14 19 19 14 19 14 21 21 21zM19 10L21 10 21 3 14 3 14 5 19 5z"></path>
                                        </svg>
                                        <p>Full Stack Development</p>
                                    </div>
                                </div>
                                <div className="card  bg-base-100 lg:w-96 w-36 shadow-xl">
                                    <div className="card-body flex items-center">
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 24 24"
                                            height="5em"
                                            width="5em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M20,3H7C5.897,3,5,3.897,5,5v2H4C2.897,7,2,7.897,2,9v10c0,1.103,0.897,2,2,2h6c1.103,0,2-0.897,2-2h8c1.103,0,2-0.897,2-2 V5C22,3.897,21.103,3,20,3z M9.997,19H4V9h2h4L9.997,19z M19.997,17H12V9c0-1.103-0.897-2-2-2H7V5h13L19.997,17z"></path>
                                        </svg>
                                        <p>Responsive Design</p>
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
