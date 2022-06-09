import { init, sendForm } from "@emailjs/browser";
import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
    init("tV9HgefR2RM_AN2XL");
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        sendForm("default_service", "template_dpes78x", "#contact-form").then(
            function (response) {
                console.log("SUCCESS!", response.status, response.text);
            },
            function (error) {
                console.log("FAILED...", error);
            }
        );
    };

    return (
        <div>
            <div>
                <h1 className="text-center text-5xl font-bold mt-10 mb-5">
                    Contact Me
                </h1>
                <div className="flex flex-col lg:flex-row justify-center items-center">
                    <form
                        id="contact-form"
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col lg:w-2/4 w-3/4 marker:shadow-2xl bg-base-100 rounded-xl p-5"
                    >
                        <div className="indicator w-full">
                            <input
                                placeholder="Your Name"
                                className="mb-3 input input-bordered w-full"
                                type="text"
                                {...register("name", {
                                    required: {
                                        value: true,
                                    },
                                })}
                            />
                            {errors.name && (
                                <span className="indicator-item badge">
                                    Required
                                </span>
                            )}
                        </div>

                        <div className="indicator w-full">
                            <input
                                placeholder="Your Email Address"
                                className="mb-3 input input-bordered w-full"
                                type="email"
                                {...register("email", {
                                    required: {
                                        value: true,
                                    },
                                })}
                            />
                            {errors.email && (
                                <span className="indicator-item badge">
                                    Required
                                </span>
                            )}
                        </div>
                        <div className="indicator w-full">
                            <textarea
                                placeholder="Your Message"
                                className="mb-3 input input-bordered w-full h-40"
                                type="text-area"
                                {...register("message", {
                                    required: {
                                        value: true,
                                    },
                                })}
                            />
                            {errors.message && (
                                <span className="indicator-item badge">
                                    Required
                                </span>
                            )}
                        </div>

                        <input
                            value={"send"}
                            className="mb-3 btn btn-primary"
                            type="submit"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
