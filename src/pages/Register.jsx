
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
    const [succuss, setSuccess] = useState('');
    const [registerError, setRegisterError] = useState('');
    const [showPassword, setShowPassword] = useState('')

    const { createUser, changeProfile, verifyEmail } = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted = e.target.terms.checked;
        console.log(name, email, password, accepted);

        //reset
        setRegisterError('');        
        setSuccess('');

        //validation & Error handling
        if (password.length < 6) {
            setRegisterError('password should be at least 6 character')
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('your password minimum 1 character')
            return;
        }
        else if (!accepted) {
            setRegisterError('please accept term and condition')
            return;
        }



        createUser(email, password)
            .then((result) => {
                console.log(result.user);
                setSuccess('user created successfully');

                if (result.user) {
                    changeProfile(result.user, {
                        displayName: name,
                        photoURL: "https://www.facebook.com/photo/?fbid=7052547858185600&set=a.109511789155943"
                    })
                    .then(() => {
                        console.log('profile update');
                        toast.info('profile updated')


                        // send verification
                        verifyEmail(result.user)
                            .then(() => {
                                toast.info('🦄 Please verify your account!', {
                                    position: "top-center",
                                    autoClose: 5000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: "light",
                                    transition: Slide,
                                });
                            })

                    })
                    .catch((error) => {
                        console.error(error.message);
                    });

                } else {
                    console.error("User object is undefined");
                }
            })
            .catch((error) => {
                console.error(error);
                setRegisterError(error.message);
            });

    }


    return (
        <div className="border">
            <div className="mx-auto md:w-1/2">
                <h2 className="text-3xl text-black mt-5 mb-5">Please Register</h2>

                <form onSubmit={handleRegister} >

                    <input className="mb-4 text-white p-4 w-3/4" type="text" name="name" placeholder="your name" id="" required />
                    <br />
                    <input className="mb-4 text-white p-4 w-3/4" type="email" name="email" placeholder="foysal@yahoo.com" id="" required />
                    <br />

                    <div className="flex flex-row items-center">
                        <input
                            className="text-white p-4 w-3/4"
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="foysal#123" id="" />
                        <span className="ml-5" onClick={() => setShowPassword(!showPassword)}>
                            {
                                showPassword ? <FaEye className="text-3xl" /> :
                                    <FaEyeSlash className="text-3xl" />
                            }
                        </span>
                    </div>
                    <br />

                    <input type="checkbox" name="terms" id="terms" />
                    <label className="ml-2" htmlFor="terms">Accept term & Condition</label>

                    <div className="flex">
                        <input className="btn text-white mt-5 mb-4 p-4" type="submit" value="Register" />
                    </div>
                    <p>Registration done ? Please <Link to="/login">Login</Link></p>
                </form>
                {
                    registerError && <p className="text-red-700">{registerError}</p>
                }
                {
                    succuss && <p className="text-green-700">{succuss}</p>
                }
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;

