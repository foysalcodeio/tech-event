import { useContext, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';
import { useState } from "react";


const Login = () => {
    const { signIn, resetPassword, googleSignIn } = useContext(AuthContext)
    

    const [loginError, setLoginError] = useState(' ')
    const [success, setSuccess] = useState(' ')

    

    //path & location store data that which gonna go to 
    const location = useLocation();
    const navigate = useNavigate();
    console.log('sign in location & we get fully state : ', location)

    //for forget password
    // step-1
    //const emailRef = useRef(null)
    const emailRef = useRef(null)

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        // option - 2 another way
        //step-2
        // const email = e.target.email.value;
        // const password = e.target.password.value;
        // console.log(email, password);

        setLoginError(' ')

        signIn(email, password)
            .then((result) => {
                console.log(result.user)
                setSuccess('User Login Successfully')
                //navigate after login
                navigate(location?.state ? location.state : '/expo');
            })
            .catch((error) => {
                console.log(error.message)
                setLoginError(error.message)
            })

        if (password > 0) {
            setLoginError('Your password at least 6 character')
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setLoginError('1 letter must me capital')
            return;
        }

        toast('Login successfully');
    }
    const handleResetPassword = () => {
        const email = emailRef.current.value;

        if (!email) {
            console.log('please provide a valid email address', emailRef.current.value)
            return;
        }
        else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            console.log('please write a valid email')
            return;
        }

        //send validation email
        resetPassword(email)
            .then(() => {
                toast.warn('🦄please check your email!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
            })
            .catch((error) => {
                console.log(error)
            })
    }
    const handleGoogleSignIn = () =>{
        // googleSignIn()
        googleSignIn()
        .then((result) => {
            const loggedInUser = result.user;
            console.log(loggedInUser)
            setUser(loggedInUser)
        })
        .catch(error => {
            console.log('error', error.message);
        })
    }

    return (
        <div className="hero min-h-screen bg-slate-50">
            <div className="hero-content flex-col  lg:flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-900">
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="text"
                                    name="email"
                                    ref={emailRef}
                                    placeholder="email"
                                    className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link onClick={() => handleResetPassword()} href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p>New to this website? Please <Link to="/register">Register</Link></p>
                    </div>
                </div>
                <div className="p-2 ">
                    {
                        loginError && <p className="text-red-500 text-xl">{loginError}</p>
                    }
                    {
                        success && <p className="text-green-500 text-xl">{success}</p>
                    }
                </div>
                <div>
                    <p className="text-2xl">or</p>
                </div>
                <div className="px-6 sm:px-0 max-w-sm">
                    <button onClick={handleGoogleSignIn} type="button" class="text-white w-full  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between mr-2 mb-2"><svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>Sign up with Google<div></div></button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;

