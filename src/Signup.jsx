import React, { useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import axios from "axios"
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

const Signup = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);
  const navigate = useNavigate()
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!fullname.trim()) {
      newErrors.fullname = "Full name is required";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
    ) {
      newErrors.email = "Invalid email address";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password =
        "Password must be at least 6 characters";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword =
        "Confirm your password";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword =
        "Passwords do not match";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }; 
 const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validate()) {
    return;
  }

  try {
    const response = await axios.post("http://127.0.0.1:5000/signup", {
      fullname,
      email,
      password,
    });

    alert("Signup Successful!");

    console.log(response.data);

    setFullname("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setErrors({});

    navigate("/");

  } catch (err) {
  alert(err.response?.data?.message || err.response?.data?.error || "Signup Failed");
  console.log(err);
  }
};

  return (
    <div className="min-h-screen  from-blue-600 via-indigo-600 to-purple-700 flex justify-center items-center p-5">

      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-8">

        <div className="text-center mb-8">

          <h1 className="text-4xl font-bold text-gray-800">
            Create Account
          </h1>

          <p className="text-gray-500 mt-2">
            Sign up to continue
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          {/* Full Name */}

          <div>

            <label className="font-medium text-gray-700">
              Full Name
            </label>

            <div className="mt-2 flex items-center border rounded-xl px-4 py-3 focus-within:border-blue-600">

              <FaUser className="text-gray-400 mr-3" />

              <input
                type="text"
                placeholder="John Doe"
                className="w-full outline-none"
                value={fullname}
                onChange={(e) =>
                  setFullname(e.target.value)
                }
              />

            </div>

            {errors.fullname && (
              <p className="text-red-500 text-sm mt-1">
                {errors.fullname}
              </p>
            )}

          </div>

          {/* Email */}

          <div>

            <label className="font-medium text-gray-700">
              Email
            </label>

            <div className="mt-2 flex items-center border rounded-xl px-4 py-3 focus-within:border-blue-600">

              <FaEnvelope className="text-gray-400 mr-3" />

              <input
                type="email"
                placeholder="example@gmail.com"
                className="w-full outline-none"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
              />

            </div>

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email}
              </p>
            )}

          </div>

          {/* Password */}

          <div>

            <label className="font-medium text-gray-700">
              Password
            </label>

            <div className="mt-2 flex items-center border rounded-xl px-4 py-3 focus-within:border-blue-600">

              <FaLock className="text-gray-400 mr-3" />

              <input
                type={
                  showPassword ? "text" : "password"
                }
                placeholder="********"
                className="w-full outline-none"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </button>

            </div>

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password}
              </p>
            )}
          </div>
                    {/* Confirm Password */}

          <div>

            <label className="font-medium text-gray-700">
              Confirm Password
            </label>

            <div className="mt-2 flex items-center border rounded-xl px-4 py-3 focus-within:border-blue-600">

              <FaLock className="text-gray-400 mr-3" />

              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="********"
                className="w-full outline-none"
                value={confirmPassword}
                onChange={(e) =>
                  setConfirmPassword(e.target.value)
                }
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
                className="text-gray-500 hover:text-blue-600 transition"
              >
                {showConfirmPassword ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </button>

            </div>

            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword}
              </p>
            )}

          </div>

          {/* Create Account Button */}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition duration-300 shadow-lg hover:shadow-xl"
          >
            Create Account
          </button>

        </form>

        {/* Divider */}

        <div className="flex items-center my-6">
          <div className="flex-1 border-t"></div>
          <span className="px-3 text-gray-400 text-sm">
            OR
          </span>
          <div className="flex-1 border-t"></div>
        </div>

        {/* Login Link */}

        <p className="text-center text-gray-600">

          Already have an account?

          <Link
            to="/"
            className="text-blue-600 font-semibold ml-2 hover:underline"
          >
            Login
          </Link>

        </p>

      </div>

    </div>

  );
};

export default Signup;