import { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../Provider/AuthProvider";

const Register = () => {
    const {createUser} = useContext(authContext)
    const handleRegister = (e) => {
       e.preventDefault();
       console.log(e.currentTarget)
       const form = new FormData(e.currentTarget)
       const name = form.get('name')
       const photo = form.get('photo')
       const email = form.get('email')
       const password = form.get('password')
       console.log(name, photo, email, password)

       

    }
    return (
        <div>
            <div className="flex flex-col items-center bg-gray-200 p-20 mt-10">
                <h2 className="text-3xl text-center">Register Your Account</h2>
                <form className="md:w-3/4 lg:w-1/2 mx-auto" onSubmit={handleRegister}>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl">UserName</span>
                        </label>
                        {/* name */}
                        <input type="text" name="name" placeholder="Your Name" className="input input-bordered bg-white" autoComplete="username" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl">PhotoURL</span>
                        </label>
                        {/* photo */}
                        <input type="text" name="photo" placeholder="photo url" className="input input-bordered bg-white" autoComplete="photo url" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl">Email Address</span>
                        </label>
                        {/* email */}
                        <input type="email" name="email" placeholder="email" className="input input-bordered bg-white" autoComplete="email" required />
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
                        <button className="btn bg-black text-white hover:text-black">Register</button>
                    </div>
                </form>

                <p className="flex justify-center text-gray-500 text-xl text-semibold">Already Have An Account ?
                    <Link className="no-underline" to="/login"><b className="ml-2"> Login Now</b></Link>
                </p>
            </div>
        </div>
    );
};

export default Register;