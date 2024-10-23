import React, { useState } from "react";
import image1 from "./assests/image1.jpg";
import { auth } from "./Firebase.jsx";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
const SignUp = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert(`Account Created`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden md:flex md:max-w-4xl">
        <div className="hidden md:block md:w-1/2 sm:grid col-span-1 ">
          <img
            src={image1}
            alt="login-illustration"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="w-full p-8 md:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-700 text-center">
            Welcome!!!!
          </h2>

          <form className="mt-4" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={(e) => setemail(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700"> Create Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full mt-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors"
            >
              Login
            </button>
          </form>

          <div className="flex items-center justify-between mt-4">
            <span className="border-b w-1/5 lg:w-1/4"></span>
            <span className="text-xs text-gray-500 uppercase">or</span>
            <span className="border-b w-1/5 lg:w-1/4"></span>
          </div>

          <button className="w-full flex items-center justify-center mt-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500 transition-colors">
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google icon"
              className="w-5 h-5 mr-2"
            />
            Sign in with Google
          </button>

          <p className="text-center text-sm text-gray-500 mt-4">
            Already Have an Account ??{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
