import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Login = () => {
    const {signIn} = useContext(AuthContext)
    
    const handleLogin = (e) => {
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password')
        console.log(email, password)

        signIn(email, password)
        .then((result)=>{
            console.log(result.user)
        })
        .catch((error)=>{
            console.log(error.message)
        })

    }
    return (
        <div className="max-w-7xl mx-auto">
             <div className="flex flex-col items-center bg-gray-200 p-20 mt-10">
                <h2 className="text-3xl text-center">Login Your Account</h2>

                <form className="md:w-3/4 lg:w-1/2 mx-auto" onSubmit={handleLogin}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl">Email Address</span>
                        </label>
                        {/* email */}
                        <input type="email" name="email" placeholder="email" className="input input-bordered bg-white" autoComplete="username" required />

                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl">Password</span>
                        </label>
                        {/* password */}
                        <input type="password" name="password" placeholder="password" className="input input-bordered bg-white" autoComplete="current-password" required />

                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover text-red-500 text-xl">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-black text-white hover:text-black">Login</button>
                    </div>
                </form>
                <p className="flex justify-center text-gray-500 text-xl text-semibold">Don't Have An Account ?
                    <Link className="no-underline" to="/register"><b className="ml-2"> Register Now</b></Link>
                </p>
            </div>
        </div>
    );
};

export default Login;