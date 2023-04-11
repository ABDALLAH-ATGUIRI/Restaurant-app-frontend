import React, { Fragment, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { instance } from "../../utils/api/axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import AppMobile from "../../assets/images/AppMobile.png";

const INIT_FORM = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    role: "user" || "admin",
    password: "",
    confirmPassword: "",
};

export const SignIn = () => {
    const [form, setFrom] = useState(INIT_FORM);
    const navigate = useNavigate();


    function handleChange({ target: { name, value } }) {
        setFrom((init) => ({ ...init, [name]: value }));
    }

    async function handleSubmit() {
        try {
            if (form.password === form.confirmPassword) {
                if (!Object.values(form).includes("")) {

                    await instance.post("/auth/signup", form).then((res) => {
                        console.log(res);
                        toast.success("Everything went smoothly.", {
                            style: {
                                borderRadius: "10px",
                                background: "#333",
                                color: "#fff",
                                fontSize: "14px",
                            },
                        });

                        setTimeout(() => {
                            navigate("/login", { replace: true });
                        }, 850);

                    });
                } else {
                    toast.error("Merci de remplir le formulaire", {
                        style: {
                            borderRadius: "10px",
                            background: "#333",
                            color: "#fff",
                            fontSize: "14px",
                        },
                    });
                }
            } else {
                toast.error("Invalid password or Confirm password ", {
                    style: {
                        borderRadius: "10px",
                        background: "#333",
                        color: "#fff",
                        fontSize: "14px",
                    },
                });
            }
        } catch (e) {
            const { error } = e?.response?.data;
            toast.error("This email is already exist", {
                style: {
                    borderRadius: "10px",
                    background: "#333",
                    color: "#fff",
                    fontSize: "14px",
                },
            });

        }
    }
    return (
        <Fragment>
            <Toaster position="bottom-center" reverseOrder={false} />

            <div className="flex lg:flex-row md:flex-col rounded-lg shadow-lg h-screen w-screen sm:mx-0">
                <div className="flex flex-col w-full lg:w-1/2 p-16">
                    <div className="flex flex-col flex-1 justify-center mb-8">
                        <h1 className="md:text-4xl  font-bold mb-12 text-center text-orange-500">Registration Form</h1>
                        <div className="w-full mt-4">
                            <form className="w-11/12">
                                <div className="lg:flex w-full gap-3">
                                    <div className="mb-8  w-full">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">First Name</label>
                                        <input
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                                            name="firstName"
                                            value={form?.firstName}
                                            onChange={handleChange}
                                            type="text"
                                            id="first-name"
                                            placeholder="Entrez Votre Nom" />
                                    </div>
                                    <div className=" mb-8  w-full">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">Last Name</label>
                                        <input
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                                            name="lastName"
                                            value={form?.lastName}
                                            onChange={handleChange}
                                            type="text"
                                            id="last-name"
                                            placeholder="Entrez Votre Prénom" />
                                    </div>

                                </div>

                                <div className="mb-8">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Phone">Phone</label>
                                    <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                                        name="phone"
                                        value={form?.phone}
                                        onChange={handleChange}
                                        type="tel"
                                        id="contact-phone"
                                        placeholder="123-456-789"
                                    />
                                </div>

                                <div className="mb-8">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                                    <input
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                                        name="email"
                                        value={form?.email}
                                        onChange={handleChange}
                                        type="text"
                                        id="contact-email"
                                        placeholder="email@exemple.com"
                                    />
                                </div>

                                <div className="mb-8">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                                    <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                                        name="password"
                                        value={form?.password}
                                        onChange={handleChange}
                                        type="password"
                                        minLength={8}
                                        id="password"
                                        placeholder="********"
                                    />
                                </div>
                                <div className="mb-8">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">Confirm Password</label>
                                    <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                                        type="password"
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        placeholder="********"
                                        minLength={8}
                                        value={form?.confirmPassword}
                                        onChange={handleChange} />
                                </div>

                                <div className="flex items-center mb-8">
                                    <input id="default-checkbox"
                                        type="checkbox"
                                        value={form?.role}
                                        onChange={(e) => { setFrom((init) => ({ ...init, role: e.target.checked ? "admin" : "user" })) }}
                                        name="role"
                                        className="w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 rounded focus:ring-yellow-500 dark:focus:ring-yellow-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Are you a restaurant owner?</label>
                                </div>
                                <button type="button"
                                    data-te-ripple-init
                                    data-te-ripple-color="light"
                                    className="w-full bg-orange-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-orange-600 transition duration-300"
                                    onClick={() => { handleSubmit() }}
                                >Register</button>

                                <div className="flex justify-between  mt-8 p-2">
                                    <div className="text-start text-yellow-dark text-lg font-mono">
                                        <span className="no-underline" >Do you already have an account?</span>
                                        <Link to="/login" className="no-underline hover:underline text-yellow-400 font-semibold" >Login</Link>
                                    </div>
                                    <div className="text-yellow-dark text-lg font-mono ">
                                        <Link to="/" className="no-underline hover:underline text-orange-500 font-bold" > Back to home →</Link>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
                <div className="hidden md:block h-full lg:w-1/2 rounded-r-lg p-20" style={{ background: `url(${AppMobile})`, backgroundSize: "cover", backgroundPosition: "center center" }}></div>
            </div>
        </Fragment >
    )
}
