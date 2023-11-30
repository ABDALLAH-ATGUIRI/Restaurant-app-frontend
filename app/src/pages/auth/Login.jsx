import React, { Fragment, useContext, useState } from 'react'
import { instance } from "../../utils/api/axios";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../context/Auth";
import { Link, useNavigate } from "react-router-dom";
import jwt_decode from 'jwt-decode';
import FirstBg from '../../assets/images/dasboard-reservation.png'

const INIT_FORM = {
    email: "",
    password: "",
};

export const Login = () => {
    const [form, setFrom] = useState(INIT_FORM);
    const { setAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    function handleChange({ target: { name, value } }) {
        setFrom((init) => ({ ...init, [name]: value }));
    }

    const submit = async () => {
        try {
            return await instance.post("/auth/login", form);
        } catch (e) {
            if (e.response.data.message === "Invalid email or password") {
                toast.error("Please check Email or Password invalid", {
                    style: {
                        borderRadius: "10px",
                        background: "#333",
                        color: "#fff",
                        fontSize: "14px",
                    },
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
        }
    };

    async function handleSubmit() {
        try {
            const res = submit();
            const {
                data: { token },
            } = await res;


            toast.promise(res, {
                loading: "Loading...",
                success: "Everything went smoothly.",
                error: "Uh oh, there was an error!",
            });

            localStorage.setItem("token", token);

            const decoded = jwt_decode(token);

            setAuth(() => ({
                token: token,
                user: decoded,
                id: decoded?.id,
                role: decoded?.role,
            }));

            setTimeout(() => {
                decoded?.role === "admin" ? navigate("/admin/dashboard", { replace: true }) : navigate("/client/dashboard", { replace: true });
            }, 850);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <Fragment>
            <Toaster position="bottom-center" reverseOrder={false} />

            <section className="gradient-form h-screen w-full my-auto  dark:bg-neutral-700 bg-gray-900" style={{ backgroundImage: `url(${FirstBg})`, backgroundSize: "cover" }}>
                <div className="flex h-full w-full relative flex-wrap items-center justify-center bg-black/60 text-neutral-800 dark:text-neutral-200  mx-auto">

                    <div className="xl:w-1/2  px-4 flex flex-col justify-center  md:mx-6 md:p-12 absolute rounded-lg shadow-3xl lg:w-5/6 md:w-11/12 w-full z-20 bg-white/90 border-2 border-white" >
                        <h1 className="text-3xl font-bold py-4 border-b-4 border-orange-500">Login</h1>

                        <form className='pt-20 '>
                            <div>
                                <label htmlFor="hs-validation-name-error" className="block text-md font-semibold mb-2 dark:text-white">Email</label>

                                <div className="relative pb-12">
                                    <input
                                        name="email"
                                        value={form?.email}
                                        onChange={handleChange}
                                        type="email"
                                        placeholder="atguiri@gmail.com"
                                        className="py-3 px-4 block text-base w-full  border-0 border-b-2 focus:ring-orange-300 focus:border-orange-300  focus:outline-none focus:ring-1 focus:ring-offset-2 "
                                        required aria-describedby="hs-validation-name-error-helper" />
                                    {/* <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                                                    <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                    </svg>
                                                </div> */}
                                </div>
                                {/* <p className="text-sm text-red-600 mt-2" id="hs-validation-name-error-helper">Please enter a valid email address.</p> */}
                            </div>

                            <div>
                                <label htmlFor="hs-validation-name-success" className="block text-md font-semibold mb-2 dark:text-white">Password</label>

                                <div className="relative pb-12">
                                    <input
                                        name="password"
                                        value={form?.password}
                                        onChange={handleChange}
                                        type="password"
                                        placeholder="***********"
                                        className="py-3 px-4 block text-base w-full border-0 border-b-2 focus:ring-orange-300 focus:border-orange-300 focus:outline-none focus:ring-1 focus:ring-offset-2 "
                                        required aria-describedby="hs-validation-name-success-helper" />
                                    {/* <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                                                    <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                                                    </svg>
                                                </div> */}
                                </div>
                                {/* <p className="text-sm text-green-600 mt-2" id="hs-validation-name-success-helper">Looks good!</p> */}
                            </div>
                            <div className="mb-12 pt-1 pb-1 text-center">
                                <button type="button"
                                    data-te-ripple-init
                                    data-te-ripple-color="light"
                                    className="w-full bg-orange-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-orange-600 transition duration-300"
                                    onClick={() => { handleSubmit() }}
                                >Login</button>
                            </div>

                            <div className="flex justify-between  outline-none  mt-8 p-2">
                                <div className="text-start text-yellow-dark text-lg font-mono">
                                    <span className="no-underline" >Do you already have an account?</span>
                                    <Link to="/signIn" className="no-underline hover:underline text-yellow-400 font-semibold" >Register</Link>
                                </div>
                                <div className="text-yellow-dark text-lg font-mono ">
                                    <Link to="/" className="no-underline hover:underline text-orange-500 font-bold" > Back to home →</Link>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </section>
        </Fragment>
    )
}
