import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1)
    }
    return (
        <div class="min-h-screen flex flex-grow items-center justify-center bg-gray-50">
            <div class="rounded-lg bg-white p-8 text-center shadow-xl">
                <h1 class="mb-4 text-4xl font-bold">404</h1>
                <p class="text-gray-600">Oops! The page you are looking for could not be found.</p>
                <button onClick={handleBack} className="btn btn-error text-white">Go Back to Home</button>
            </div>
        </div>

    );
};

export default NotFound;