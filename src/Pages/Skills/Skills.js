import React from "react";

const Skills = () => {
    return (
        <div className="py-10">
            <h1 className="text-center text-5xl font-bold  mt-10 mb-5">
                My Skill
            </h1>
            <div className="flex justify-evenly">
                <div className="tooltip" data-tip="HTML">
                    <p>
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 1024 1024"
                            height="3em"
                            width="3em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M145.2 96l66 746.6L512 928l299.6-85.4L878.9 96H145.2zm595 177.1l-4.8 47.2-1.7 19.5H382.3l8.2 94.2h335.1l-3.3 24.3-21.2 242.2-1.7 16.2-187 51.6v.3h-1.2l-.3.1v-.1h-.1l-188.6-52L310.8 572h91.1l6.5 73.2 102.4 27.7h.4l102-27.6 11.4-118.6H510.9v-.1H306l-22.8-253.5-1.7-24.3h460.3l-1.6 24.3z"></path>
                        </svg>
                    </p>
                </div>

                <div className="tooltip" data-tip="CSS">
                    <p>
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            version="1.1"
                            viewBox="0 0 32 32"
                            height="3em"
                            width="3em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M16.017 21.044v0zM4.743 3.519l2.049 22.981 9.194 2.552 9.22-2.556 2.051-22.977h-22.514zM23 8.775l-0.693 7.767h-0l-0.48 5.359-0.042 0.476-5.781 1.603-5.773-1.603-0.395-4.426h2.829l0.201 2.248 3.142 0.847 0.008-0.002 0.002-0 3.134-0.846 0.329-3.655-6.579 0-0.056-0.633-0.129-1.429-0.067-0.756 7.081-0 0.258-2.886h-10.786l-0.056-0.634-0.129-1.429-0.067-0.756h14.118l-0.068 0.756z"></path>
                        </svg>
                    </p>
                </div>

                <div className="tooltip" data-tip="Bootstrap">
                    <p>
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 16 16"
                            height="3em"
                            width="3em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.002 0a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V4a4 4 0 00-4-4h-8zm1.06 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062V12zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375v2.725z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </p>
                </div>

                <div className="tooltip" data-tip="Tailwind">
                    <p>
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            role="img"
                            viewBox="0 0 24 24"
                            height="3em"
                            width="3em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title></title>
                            <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"></path>
                        </svg>
                    </p>
                </div>

                <div className="tooltip" data-tip="JavaScript">
                    <p>
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            role="img"
                            viewBox="0 0 24 24"
                            height="3em"
                            width="3em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title></title>
                            <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"></path>
                        </svg>
                    </p>
                </div>

                <div className="tooltip" data-tip="ReactJS">
                    <p>
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 24 24"
                            height="3em"
                            width="3em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g>
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path
                                    fillRule="nonzero"
                                    d="M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-.528 2.994c.175.21.351.414.528.609.177-.195.353-.398.528-.609a24.883 24.883 0 0 1-1.056 0zm-1.995-.125a20.678 20.678 0 0 1-2.285-.368c-.075.35-.132.69-.17 1.016-.19 1.583.075 2.545.478 2.777.403.233 1.368-.019 2.645-.974.263-.197.528-.416.794-.655a20.678 20.678 0 0 1-1.462-1.796zm7.331-.368c-.717.16-1.483.284-2.285.368a20.678 20.678 0 0 1-1.462 1.796c.266.24.531.458.794.655 1.277.955 2.242 1.207 2.645.974.403-.232.667-1.194.479-2.777a11.36 11.36 0 0 0-.17-1.016zm1.45-.387c.577 2.639.274 4.74-1.008 5.48-1.282.74-3.253-.048-5.25-1.867-1.997 1.819-3.968 2.606-5.25 1.866-1.282-.74-1.585-2.84-1.009-5.48C3.167 14.794 1.5 13.48 1.5 12s1.667-2.793 4.241-3.614c-.576-2.639-.273-4.74 1.009-5.48 1.282-.74 3.253.048 5.25 1.867 1.997-1.819 3.968-2.606 5.25-1.866 1.282.74 1.585 2.84 1.009 5.48C20.833 9.206 22.5 10.52 22.5 12s-1.667 2.793-4.241 3.614zm-7.32-9.779a11.36 11.36 0 0 0-.793-.655C8.868 4.225 7.903 3.973 7.5 4.206c-.403.232-.667 1.194-.479 2.777.04.327.096.666.17 1.016a20.678 20.678 0 0 1 2.286-.368c.475-.653.965-1.254 1.462-1.796zm3.585 1.796c.802.084 1.568.209 2.285.368.075-.35.132-.69.17-1.016.19-1.583-.075-2.545-.478-2.777-.403-.233-1.368.019-2.645.974a11.36 11.36 0 0 0-.794.655c.497.542.987 1.143 1.462 1.796zm-1.995-.125c-.175-.21-.351-.414-.528-.609-.177.195-.353.398-.528.609a24.884 24.884 0 0 1 1.056 0zm-4.156 7.198a24.884 24.884 0 0 1-.528-.914c-.095.257-.183.51-.263.761.257.056.521.107.79.153zm1.932.234a22.897 22.897 0 0 0 3.392 0A22.897 22.897 0 0 0 15.392 12a22.897 22.897 0 0 0-1.696-2.938 22.897 22.897 0 0 0-3.392 0A22.897 22.897 0 0 0 8.608 12a22.897 22.897 0 0 0 1.696 2.938zm5.852-4.728c.095-.257.183-.51.263-.761a17.974 17.974 0 0 0-.79-.153 24.884 24.884 0 0 1 .527.914zM6.13 9.837c-.34.11-.662.23-.964.36C3.701 10.825 3 11.535 3 12c0 .465.7 1.175 2.166 1.803.302.13.624.25.964.36.222-.7.497-1.426.825-2.163a20.678 20.678 0 0 1-.825-2.163zm1.45-.388c.081.25.169.504.264.76a24.884 24.884 0 0 1 .528-.913c-.27.046-.534.097-.791.153zm10.29 4.714c.34-.11.662-.23.964-.36C20.299 13.175 21 12.465 21 12c0-.465-.7-1.175-2.166-1.803a11.36 11.36 0 0 0-.964-.36c-.222.7-.497 1.426-.825 2.163.328.737.603 1.462.825 2.163zm-1.45.388c-.081-.25-.169-.504-.264-.76a24.884 24.884 0 0 1-.528.913c.27-.046.534-.097.791-.153z"
                                ></path>
                            </g>
                        </svg>
                    </p>
                </div>

                <div className="tooltip" data-tip="NodeJS">
                    <p>
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 448 512"
                            height="3em"
                            width="3em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z"></path>
                        </svg>
                    </p>
                </div>

                <div className="tooltip" data-tip="Firebase">
                    <p>
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            role="img"
                            viewBox="0 0 24 24"
                            height="3em"
                            width="3em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title></title>
                            <path d="M3.89 15.673L6.255.461A.542.542 0 0 1 7.27.289L9.813 5.06 3.89 15.673zm16.795 3.691L18.433 5.365a.543.543 0 0 0-.918-.295l-14.2 14.294 7.857 4.428a1.62 1.62 0 0 0 1.587 0l7.926-4.428zM14.3 7.148l-1.82-3.482a.542.542 0 0 0-.96 0L3.53 17.984 14.3 7.148z"></path>
                        </svg>
                    </p>
                </div>

                <div className="tooltip" data-tip="Git">
                    <p>
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 1024 1024"
                            height="3em"
                            width="3em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                        </svg>
                    </p>
                </div>

                <div className="tooltip" data-tip="Linux">
                    <p>
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            version="1.1"
                            viewBox="0 0 32 32"
                            height="3em"
                            width="3em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M15.534 8.411c0 0.102-0.102 0.102-0.102 0.102h-0.102c-0.102 0-0.102-0.102-0.204-0.204 0 0-0.102-0.102-0.102-0.204s0-0.102 0.102-0.102l0.204 0.102c0.102 0.102 0.204 0.204 0.204 0.306zM13.698 7.391c0-0.51-0.204-0.816-0.51-0.816 0 0 0 0.102-0.102 0.102v0.204h0.306c0 0.204 0.102 0.306 0.102 0.51h0.204zM17.268 6.881c0.204 0 0.306 0.204 0.408 0.51h0.204c-0.102-0.102-0.102-0.204-0.102-0.306s0-0.204-0.102-0.306-0.204-0.204-0.306-0.204c0 0-0.102 0.102-0.204 0.102 0 0.102 0.102 0.102 0.102 0.204zM14.208 8.513c-0.102 0-0.102 0-0.102-0.102s0-0.204 0.102-0.306c0.204 0 0.306-0.102 0.306-0.102 0.102 0 0.102 0.102 0.102 0.102 0 0.102-0.102 0.204-0.306 0.408h-0.102zM13.086 8.411c-0.408-0.204-0.51-0.51-0.51-1.020 0-0.306 0-0.51 0.204-0.714 0.102-0.204 0.306-0.306 0.51-0.306s0.306 0.102 0.51 0.306c0.102 0.306 0.204 0.612 0.204 0.918v0.204h0.102v-0.102c0.102 0 0.102-0.204 0.102-0.612 0-0.306 0-0.612-0.204-0.918s-0.408-0.51-0.816-0.51c-0.306 0-0.612 0.204-0.714 0.51-0.204 0.408-0.245 0.714-0.245 1.224 0 0.408 0.143 0.816 0.551 1.224 0.102-0.102 0.204-0.102 0.306-0.204zM25.834 22.791c0.102 0 0.102-0.041 0.102-0.133 0-0.224-0.102-0.489-0.408-0.785-0.306-0.306-0.816-0.5-1.428-0.581-0.102-0.010-0.204-0.010-0.204-0.010-0.102-0.020-0.102-0.020-0.204-0.020-0.102-0.010-0.306-0.031-0.408-0.051 0.306-0.949 0.408-1.785 0.408-2.519 0-1.020-0.204-1.734-0.612-2.346s-0.816-0.918-1.326-1.020c-0.102 0.102-0.102 0.102-0.102 0.204 0.51 0.204 1.020 0.612 1.326 1.224 0.306 0.714 0.408 1.326 0.408 2.040 0 0.571-0.102 1.418-0.51 2.499-0.408 0.163-0.816 0.54-1.122 1.132 0 0.092 0 0.143 0.102 0.143 0 0 0.102-0.092 0.204-0.265 0.204-0.173 0.306-0.347 0.51-0.52 0.306-0.173 0.51-0.265 0.816-0.265 0.51 0 1.020 0.071 1.326 0.214 0.408 0.133 0.612 0.275 0.714 0.439 0.102 0.153 0.204 0.296 0.306 0.428 0 0.132 0.102 0.194 0.102 0.194zM16.452 8.003c-0.102-0.102-0.102-0.306-0.102-0.51 0-0.408 0-0.612 0.204-0.918 0.204-0.204 0.408-0.306 0.612-0.306 0.306 0 0.51 0.204 0.714 0.408 0.102 0.306 0.204 0.51 0.204 0.816 0 0.51-0.204 0.816-0.612 0.918 0 0 0.102 0.102 0.204 0.102 0.204 0 0.306 0.102 0.51 0.204 0.102-0.612 0.204-1.020 0.204-1.53 0-0.612-0.102-1.020-0.306-1.326-0.306-0.306-0.612-0.408-1.020-0.408-0.306 0-0.612 0.102-0.918 0.306-0.204 0.306-0.306 0.51-0.306 0.816 0 0.51 0.102 0.918 0.306 1.326 0.102 0 0.204 0.102 0.306 0.102zM17.676 9.635c-1.326 0.918-2.346 1.326-3.162 1.326-0.714 0-1.428-0.306-2.040-0.816 0.102 0.204 0.204 0.408 0.306 0.51l0.612 0.612c0.408 0.408 0.918 0.612 1.428 0.612 0.714 0 1.53-0.408 2.55-1.122l0.918-0.612c0.204-0.204 0.408-0.408 0.408-0.714 0-0.102 0-0.204-0.102-0.204-0.102-0.204-0.612-0.51-1.632-0.816-0.918-0.408-1.632-0.612-2.040-0.612-0.306 0-0.816 0.204-1.53 0.612-0.612 0.408-1.020 0.816-1.020 1.224 0 0 0.102 0.102 0.204 0.306 0.612 0.51 1.224 0.816 1.836 0.816 0.816 0 1.836-0.408 3.162-1.428v0.204c0.102-0 0.102 0.102 0.102 0.102zM20.021 30.236c0.408 0.767 1.122 1.152 1.938 1.152 0.204 0 0.408-0.031 0.612-0.092 0.204-0.041 0.408-0.112 0.51-0.194 0.102-0.071 0.204-0.143 0.306-0.224 0.204-0.071 0.204-0.122 0.306-0.173l1.734-1.499c0.408-0.325 0.816-0.61 1.326-0.857 0.408-0.245 0.816-0.408 1.020-0.5 0.306-0.082 0.51-0.204 0.714-0.367 0.102-0.153 0.204-0.347 0.204-0.592 0-0.296-0.204-0.52-0.408-0.683s-0.408-0.275-0.612-0.347-0.408-0.235-0.714-0.51c-0.204-0.265-0.408-0.632-0.51-1.112l-0.102-0.591c-0.102-0.275-0.102-0.479-0.204-0.592 0-0.031 0-0.041-0.102-0.041s-0.306 0.092-0.408 0.265c-0.204 0.173-0.408 0.367-0.612 0.571-0.102 0.204-0.408 0.387-0.612 0.561-0.306 0.173-0.612 0.265-0.816 0.265-0.816 0-1.224-0.224-1.53-0.663-0.204-0.326-0.306-0.704-0.408-1.132-0.204-0.173-0.306-0.265-0.51-0.265-0.51 0-0.714 0.53-0.714 1.601v3.172c0 0.092-0.102 0.296-0.102 0.612-0.102 0.316-0.102 0.675-0.102 1.081l-0.204 1.132v0.017zM5.233 29.693c0.948 0.139 2.040 0.435 3.274 0.888 1.234 0.449 1.989 0.683 2.264 0.683 0.714 0 1.306-0.316 1.795-0.927 0.102-0.198 0.102-0.43 0.102-0.698 0-0.964-0.581-2.183-1.744-3.661l-0.694-0.928c-0.143-0.194-0.316-0.49-0.54-0.887-0.214-0.398-0.408-0.704-0.561-0.918-0.133-0.235-0.347-0.469-0.622-0.704-0.265-0.235-0.571-0.387-0.908-0.469-0.428 0.082-0.724 0.224-0.867 0.418s-0.224 0.408-0.245 0.632c-0.031 0.214-0.092 0.357-0.194 0.428-0.102 0.061-0.275 0.112-0.51 0.163-0.051 0-0.143 0-0.275 0.010h-0.275c-0.541 0-0.908 0.061-1.101 0.163-0.255 0.296-0.388 0.632-0.388 0.989 0 0.163 0.041 0.439 0.122 0.826 0.082 0.377 0.122 0.683 0.122 0.897 0 0.418-0.122 0.836-0.377 1.254-0.255 0.439-0.388 0.765-0.388 0.997 0.102 0.396 0.775 0.674 2.009 0.837zM8.629 20.42c0-0.704 0.184-1.479 0.561-2.397 0.367-0.918 0.734-1.53 1.091-1.938-0.020-0.102-0.071-0.102-0.153-0.102l-0.102-0.102c-0.296 0.306-0.653 1.020-1.081 2.040-0.428 0.918-0.653 1.764-0.653 2.387 0 0.459 0.112 0.857 0.316 1.203 0.224 0.337 0.765 0.826 1.622 1.448l1.081 0.704c1.152 1 1.764 1.693 1.764 2.101 0 0.214-0.102 0.428-0.408 0.663-0.204 0.245-0.479 0.367-0.714 0.367-0.020 0-0.031 0.020-0.031 0.071 0 0.010 0.102 0.214 0.316 0.612 0.428 0.581 1.346 0.867 2.57 0.867 2.244 0 3.977-0.918 5.303-2.754 0-0.51 0-0.826-0.102-0.959v-0.377c0-0.663 0.102-1.163 0.306-1.489s0.408-0.479 0.714-0.479c0.204 0 0.408 0.071 0.612 0.224 0.102-0.785 0.102-1.469 0.102-2.081 0-0.928 0-1.693-0.204-2.407-0.102-0.612-0.306-1.122-0.51-1.53-0.204-0.306-0.408-0.612-0.612-0.918s-0.306-0.612-0.51-0.918c-0.102-0.408-0.204-0.714-0.204-1.224-0.306-0.51-0.51-1.020-0.816-1.53-0.204-0.51-0.408-1.020-0.612-1.428l-0.918 0.714c-1.020 0.714-1.836 1.020-2.55 1.020-0.612 0-1.122-0.102-1.428-0.51l-0.612-0.51c0 0.306-0.102 0.714-0.306 1.122l-0.643 1.224c-0.286 0.714-0.438 1.122-0.469 1.428-0.041 0.204-0.071 0.408-0.092 0.408l-0.765 1.53c-0.826 1.53-1.244 2.947-1.244 4.12 0 0.235 0.020 0.479 0.061 0.724-0.459-0.316-0.683-0.755-0.683-1.326zM15.932 30.068c-1.326 0-2.346 0.18-3.060 0.535v-0.031c-0.51 0.612-1.081 0.928-1.877 0.928-0.5 0-1.285-0.194-2.346-0.581-1.071-0.367-2.019-0.649-2.845-0.834-0.082-0.023-0.265-0.058-0.561-0.105-0.286-0.046-0.551-0.093-0.785-0.14-0.214-0.046-0.459-0.115-0.724-0.209-0.255-0.081-0.459-0.186-0.612-0.313-0.141-0.129-0.21-0.273-0.21-0.436s0.035-0.337 0.104-0.523c0.065-0.112 0.137-0.224 0.208-0.326 0.071-0.112 0.133-0.214 0.173-0.316 0.061-0.092 0.102-0.184 0.143-0.286 0.041-0.092 0.082-0.184 0.102-0.296 0.020-0.102 0.041-0.204 0.041-0.306s-0.041-0.408-0.122-0.948c-0.082-0.53-0.122-0.867-0.122-1.010 0-0.449 0.102-0.806 0.326-1.061s0.439-0.388 0.663-0.388h1.173c0.092 0 0.235-0.051 0.449-0.173 0.071-0.163 0.133-0.296 0.173-0.418 0.051-0.122 0.071-0.214 0.092-0.255 0.020-0.061 0.041-0.122 0.061-0.173 0.041-0.071 0.092-0.153 0.163-0.235-0.082-0.102-0.122-0.235-0.122-0.398 0-0.112 0-0.214 0.020-0.275 0-0.367 0.173-0.887 0.54-1.571l0.357-0.643c0.296-0.551 0.52-0.959 0.683-1.367 0.173-0.408 0.357-1.020 0.561-1.836 0.163-0.714 0.551-1.428 1.163-2.142l0.765-0.918c0.53-0.612 0.877-1.122 1.071-1.53s0.296-0.918 0.296-1.326c0-0.204-0.051-0.816-0.163-1.836-0.102-1.020-0.153-2.040-0.153-2.958 0-0.714 0.061-1.224 0.194-1.734s0.367-1.020 0.714-1.428c0.306-0.408 0.714-0.816 1.326-1.020s1.326-0.306 2.142-0.306c0.306 0 0.612 0 0.918 0.102 0.306 0 0.714 0.102 1.224 0.306 0.408 0.204 0.816 0.408 1.122 0.714 0.408 0.306 0.714 0.816 1.020 1.326 0.204 0.612 0.408 1.224 0.51 2.040 0.102 0.51 0.102 1.020 0.204 1.734 0 0.612 0.102 1.020 0.102 1.326 0.102 0.306 0.102 0.714 0.204 1.224 0.102 0.408 0.204 0.816 0.408 1.122 0.204 0.408 0.408 0.816 0.714 1.224 0.306 0.51 0.714 1.020 1.122 1.632 0.918 1.020 1.632 2.142 2.040 3.263 0.51 1.020 0.816 2.346 0.816 3.763 0 0.704-0.102 1.387-0.306 2.050 0.204 0 0.306 0.082 0.408 0.224s0.204 0.449 0.306 0.928l0.102 0.755c0.102 0.224 0.204 0.439 0.51 0.622 0.204 0.184 0.408 0.337 0.714 0.459 0.204 0.102 0.51 0.245 0.714 0.428 0.204 0.204 0.306 0.418 0.306 0.642 0 0.347-0.102 0.602-0.306 0.785-0.204 0.204-0.408 0.347-0.714 0.439-0.204 0.102-0.612 0.306-1.224 0.594-0.51 0.302-1.020 0.668-1.53 1.101l-1.020 0.868c-0.408 0.398-0.816 0.683-1.122 0.857-0.306 0.184-0.714 0.275-1.122 0.275l-0.714-0.082c-0.816-0.214-1.326-0.622-1.632-1.244-1.632-0.198-2.958-0.296-3.774-0.296z"></path>
                        </svg>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Skills;
