import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="navbar lg:bg-base-100/75  max-w-min lg:max-w-full  sticky top-0 z-50 p-0">
            <div>
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex="0"
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <HashLink smooth to="/#homesection">
                                Home
                            </HashLink>
                        </li>

                        <li>
                            <HashLink smooth to="/home#aboutsection">
                                About
                            </HashLink>
                        </li>

                        <li>
                            <HashLink smooth to="/home#skillsection">
                                Skills
                            </HashLink>
                        </li>

                        <li>
                            <HashLink smooth to="/home#projectsection">
                                Projects
                            </HashLink>
                        </li>

                        <li>
                            <HashLink smooth to="/home#contactsection">
                                Contact
                            </HashLink>
                        </li>

                        <li>
                            <HashLink smooth to="/testimonials">
                                Testimonials
                            </HashLink>
                        </li>

                        <li>
                            <HashLink smooth to="/blogs">
                                Blogs
                            </HashLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="navbar hidden lg:flex justify-center">
                <ul className="menu menu-horizontal p-0">
                    <li className="mx-12">
                        <HashLink smooth to="/#homesection">
                            {" "}
                            <span className="text-accent">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 1024 1024"
                                    height="1.25em"
                                    width="1.25em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3 0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8 24.9-25 24.9-65.5-.1-90.5z"></path>
                                </svg>
                            </span>{" "}
                            Home
                        </HashLink>
                    </li>

                    <li className="mx-12">
                        <HashLink smooth to="/home#aboutsection">
                            {" "}
                            <span className="text-accent">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 640 512"
                                    height="1.25em"
                                    width="1.25em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M384 320H256c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32zM192 32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v128c0 17.67 14.33 32 32 32h95.72l73.16 128.04C211.98 300.98 232.4 288 256 288h.28L192 175.51V128h224V64H192V32zM608 0H480c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32z"></path>
                                </svg>
                            </span>{" "}
                            About
                        </HashLink>
                    </li>
                    <li>
                        <HashLink
                            smooth
                            to="/home#skillsection"
                            className="mx-12"
                        >
                            {" "}
                            <span className="text-accent">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    role="img"
                                    viewBox="0 0 24 24"
                                    height="1.25em"
                                    width="1.25em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <title></title>
                                    <path d="M15.495 18.38a.052.052 0 00.03-.033l.693-2.217 3.192-4.79a.052.052 0 00.003-.004.052.052 0 00.001-.002.052.052 0 00.001-.002.052.052 0 00.002-.005.052.052 0 000-.003.052.052 0 00.002-.003.052.052 0 000-.004.052.052 0 000-.005.052.052 0 000-.003.052.052 0 000-.003l-.416-6.946a.052.052 0 000-.001.052.052 0 00-.001-.005.052.052 0 000-.002.052.052 0 00-.003-.008.052.052 0 00-.002-.005.052.052 0 00-.002-.004.052.052 0 00-.003-.005.052.052 0 00-.003-.003.052.052 0 000-.001L14.818.018l-.001-.002a.052.052 0 00-.004-.003.052.052 0 00-.003-.002.052.052 0 00-.003-.002.052.052 0 00-.002-.001.052.052 0 00-.002-.001.052.052 0 00-.002-.001.052.052 0 00-.001 0 .052.052 0 000-.001.052.052 0 00-.002 0 .052.052 0 00-.002-.001.052.052 0 00-.001 0 .052.052 0 00-.005-.002.052.052 0 00-.004 0 .052.052 0 00-.002 0 .052.052 0 00-.001 0 .052.052 0 00-.001 0 .052.052 0 00-.003 0 .052.052 0 00-.001 0 .052.052 0 00-.001 0H9.22a.052.052 0 00-.003 0 .052.052 0 00-.004 0 .052.052 0 00-.004 0 .052.052 0 00-.003.001.052.052 0 00-.003.001.052.052 0 00-.005.002.052.052 0 00-.004.003.052.052 0 00-.004.002.052.052 0 00-.001 0 .052.052 0 00-.003.004.052.052 0 00-.001 0 .052.052 0 00-.003.003l-4.17 4.31a.052.052 0 00-.003.004.052.052 0 00-.006.009.052.052 0 00-.002.005.052.052 0 00-.002.008.052.052 0 000 .002.052.052 0 00-.001.003.052.052 0 000 .003l-.417 6.95a.052.052 0 000 .001.052.052 0 000 .001.052.052 0 000 .004.052.052 0 000 .004.052.052 0 000 .002.052.052 0 000 .005.052.052 0 00.001 0 .052.052 0 000 .003.052.052 0 00.001.002.052.052 0 00.001.002.052.052 0 00.001.002.052.052 0 00.001.001.052.052 0 00.002.003.052.052 0 00.001.003l3.194 4.79.692 2.214v.002a.052.052 0 000 .001.052.052 0 00.001.002.052.052 0 00.002.003.052.052 0 000 .001.052.052 0 00.001.002.052.052 0 000 .001.052.052 0 00.002.001.052.052 0 00.001.003.052.052 0 00.001.001.052.052 0 00.001.001.052.052 0 00.002.002.052.052 0 00.003.004.052.052 0 00.002.001.052.052 0 00.002.002.052.052 0 00.001 0 .052.052 0 00.003.003.052.052 0 00.001 0 .052.052 0 00.002.001.052.052 0 00.002.002.052.052 0 00.001 0 .052.052 0 00.001 0 .052.052 0 00.001.001.052.052 0 00.002 0 .052.052 0 00.001.001.052.052 0 00.001 0 .052.052 0 00.003.001.052.052 0 00.002 0 .052.052 0 000 .001.052.052 0 00.003 0 .052.052 0 00.002 0 .052.052 0 00.003.001.052.052 0 00.001 0 .052.052 0 00.002 0h6.952a.052.052 0 00.02-.004zm-.058-.1H8.89l7.201-2.095zm.618-2.193L8.62 18.249l2.703-5.677zm.068-.08l-4.733-3.516 5.139-4.124zm.11-.087l.4-7.54 2.668 2.936zm-7.699 2.27l-.646-2.069 3.231-3.36zm-.697-2.166l-3.094-4.64 6.456 1.143zm11.47-4.857l-2.655-2.92 2.256-3.717zm-7.974 1.236L9.3 5.284l7.187 2.983zm-.102.024l-6.507-1.152L9.198 5.31zm5.284-4.26l-7.2-2.99L14.748.152zm.095-.052L14.87.219l4.015 4.149zM4.694 11.14l.403-6.718 4.03.806zm4.473-6.01l-4.014-.803L9.167.18zm.104-.056V.103h5.376zm-.747 13.357v4.143l1.671-1.403zm.057 4.232l1.53.612 1.808.723-1.67-2.737zm3.5 1.335l3.338-1.335-1.67-1.402zm3.394-1.424v-4.143l-1.67 2.74zm-6.858-4.191L12 23.93l3.382-5.547z"></path>
                                </svg>
                            </span>{" "}
                            Skills
                        </HashLink>
                    </li>
                    <li className="mx-12">
                        <HashLink smooth to="/home#projectsection">
                            {" "}
                            <span className="text-accent">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 640 512"
                                    height="1.25em"
                                    width="1.25em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M384 320H256c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32zM192 32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v128c0 17.67 14.33 32 32 32h95.72l73.16 128.04C211.98 300.98 232.4 288 256 288h.28L192 175.51V128h224V64H192V32zM608 0H480c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32z"></path>
                                </svg>
                            </span>{" "}
                            Projects
                        </HashLink>
                    </li>

                    <li className="mx-12">
                        <HashLink smooth to="/home#contactsection">
                            {" "}
                            <span className="text-accent">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 24 24"
                                    height="1.25em"
                                    width="1.25em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1z"></path>
                                </svg>
                            </span>{" "}
                            Contact
                        </HashLink>
                    </li>
                    <li className="mx-12">
                        <Link to="/testimonials">
                            {" "}
                            <span className="text-accent">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 24 24"
                                    height="1.25em"
                                    width="1.25em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z"></path>
                                </svg>
                            </span>{" "}
                            Testimonials
                        </Link>
                    </li>
                    <li className="mx-12">
                        <Link to="/blogs">
                            {" "}
                            <span className="text-accent">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    stroke-width="0"
                                    viewBox="0 0 448 512"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M446.6 222.7c-1.8-8-6.8-15.4-12.5-18.5-1.8-1-13-2.2-25-2.7-20.1-.9-22.3-1.3-28.7-5-10.1-5.9-12.8-12.3-12.9-29.5-.1-33-13.8-63.7-40.9-91.3-19.3-19.7-40.9-33-65.5-40.5-5.9-1.8-19.1-2.4-63.3-2.9-69.4-.8-84.8.6-108.4 10C45.9 59.5 14.7 96.1 3.3 142.9 1.2 151.7.7 165.8.2 246.8c-.6 101.5.1 116.4 6.4 136.5 15.6 49.6 59.9 86.3 104.4 94.3 14.8 2.7 197.3 3.3 216 .8 32.5-4.4 58-17.5 81.9-41.9 17.3-17.7 28.1-36.8 35.2-62.1 4.9-17.6 4.5-142.8 2.5-151.7zm-322.1-63.6c7.8-7.9 10-8.2 58.8-8.2 43.9 0 45.4.1 51.8 3.4 9.3 4.7 13.4 11.3 13.4 21.9 0 9.5-3.8 16.2-12.3 21.6-4.6 2.9-7.3 3.1-50.3 3.3-26.5.2-47.7-.4-50.8-1.2-16.6-4.7-22.8-28.5-10.6-40.8zm191.8 199.8l-14.9 2.4-77.5.9c-68.1.8-87.3-.4-90.9-2-7.1-3.1-13.8-11.7-14.9-19.4-1.1-7.3 2.6-17.3 8.2-22.4 7.1-6.4 10.2-6.6 97.3-6.7 89.6-.1 89.1-.1 97.6 7.8 12.1 11.3 9.5 31.2-4.9 39.4z"></path>
                                </svg>
                            </span>{" "}
                            Blogs
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
