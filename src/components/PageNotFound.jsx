import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const PageNotFound = () => {
  const [textLoaded, setTextLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTextLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center px-4 sm:px-6 relative overflow-hidden py-10">
      {/* Decorative elements */}
      <div className="absolute bottom-10 left-10 w-20 h-20 rounded-full bg-blue-200 opacity-20 blur-xl"></div>
      <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-blue-100 opacity-30 blur-xl"></div>
      <div className="absolute top-1/3 left-1/4 w-16 h-16 rounded-full bg-blue-50 opacity-40 blur-lg"></div>
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full bg-blue-200 opacity-25 blur-lg"></div>

      <div className="max-w-md w-full space-y-8 text-center z-10">
        {/* Animated 404 text */}
        <div className="relative group">
          <h1 className="text-9xl font-extrabold text-gray-900 mb-4 relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-600">
              404 !
            </span>
          </h1>
          <div className="absolute -inset-4 bg-blue-100 rounded-full opacity-0 group-hover:opacity-50 blur-md transition-opacity duration-300"></div>
        </div>

        {/* Animated GIF */}
        <div className="flex justify-center">
          <img
            src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHp4cHc1b3g3OWlmdHB0dDd6ZmJkOHRwMnB1bTVvYWJ4NWt4cXl6ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/14uQ3cOFteDaU/giphy.gif"
            alt="Lost astronaut"
            className="w-48 h-48 object-contain rounded-lg shadow-lg"
          />
        </div>

        {/* Message with animation */}
        <div
          className={`transition-all duration-1000 ease-out transform ${
            textLoaded
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Oops! Page not found
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        {/* Action buttons */}
        <div
          className={`mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-300 ease-out transform ${
            textLoaded
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <Link
            to="/"
            className="w-full sm:w-auto px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Go back home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 shadow hover:shadow-md"
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
