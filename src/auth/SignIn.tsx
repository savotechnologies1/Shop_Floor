import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import signin from "../assets/signin.png";
import password from "../assets/password_icon'.png";
import visible from "../assets/visible_icon.png";
import { useState } from "react";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error] = useState("");
  const navigate = useNavigate();
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string; password: string }>();
type LoginFormData = {
  email: string;
  password: string;
};

  // const login = useAuth()
  // const onSubmit = async (data) => {
  //   navigate("/", { replace: true });
  //   setIsLoading(false);
  //   // setError("");
  //   console.log('kklj',data)
  //   try {
  //     const response = await loginApi(data);
  //     console.log("responseresponse", response);
  //     if (response.status === 200) {
  //       console.log("login page redirect");
  //       login(response.data.token);
  //       navigate("/", { replace: true });
  //     }
  //   } catch (error: unknown) {
  //     toast.error(error.response.message);
  //   }
  // };
const onSubmit = async (data:LoginFormData) => {
  setIsLoading(true); // loading start
  console.log('Submitted data:', data);
  
  try {
    // const response = await loginApi(data);
    // console.log("API Response:", response);
    
    // let role = ""; 
    
    // localStorage.setItem("token", "true");

    // if  (data.email === "support@gmail.com") {
    //   role = "shopfloor";
    // } 
    // Save role to localStorage or context if needed
    // localStorage.setItem("role", role);

    // Navigate to home page
    navigate("/", { replace: true });
  } catch (error) {
    console.error("Login error:", error);
    // Show error to user if needed
  } finally {
    setIsLoading(false); // loading end
  }
};

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left Image Section - Hidden on mobile */}
      <div className="hidden lg:block lg:w-1/2 relative bg-gray-100">
        <img
          src={signin}
          alt="Containers"
          className="w-full h-full object-cover min-h-[50vh] lg:min-h-screen"
        />
      </div>

      {/* Right Form Section */}
      <div className="w-full lg:w-1/2 bg-white flex items-center justify-center py-8 lg:py-0 relative">
        {/* Logo - Hidden on mobile, visible on desktop */}
        <div className="absolute top-6 right-6 hidden lg:block">
          <img className="w-40" src={logo} alt="Company Logo" />
        </div>

        {/* Mobile Logo - Centered at top */}
        <div className="absolute top-4 left-0 right-0 mx-auto lg:hidden">
          <img className="w-32 mx-auto" src={logo} alt="Company Logo" />
        </div>

        <div className="w-full max-w-md px-6 lg:px-8 mt-16 lg:mt-0">
          <h2 className="text-2xl lg:text-3xl font-bold text-center lg:text-left mb-4">
            Welcome back
          </h2>

          <p className="text-gray-600 text-center lg:text-left mb-8">
            Welcome back! Please enter your details
          </p>

          {error && (
            <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-md text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Email Field */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Email
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                placeholder="Enter your email"
                className={`w-full p-3 rounded-lg border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-[#052C89]`}
                autoComplete="email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message as string}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                  placeholder="••••••••"
                  className={`w-full p-3 rounded-lg border ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-[#052C89]`}
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className="absolute right-3 top-3.5 text-gray-500 hover:text-gray-700"
                  onClick={togglePasswordVisibility}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  <img
                    className="w-6"
                    src={showPassword ? visible : password}
                    alt={showPassword ? "Hide password" : "Show password"}
                  />
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message as string}
                </p>
              )}
            </div>

            {/* Forgot Password Link */}
            <div className="flex justify-between">
              <Link to="/" className="text-sm text-[#F2451C] hover:underline">
                Go to Dashboard
              </Link>
              <Link
                to="/forget-password"
                className="text-sm text-[#F2451C] hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full bg-[#213C70] hover:bg-[#1a315a] text-white py-3 px-4 rounded-lg font-medium transition-colors duration-300 ${
                isLoading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Signing in...
                </span>
              ) : (
                "Sign In"
              )}
            </button>

            {/* Sign Up Link */}
            <div className="text-center text-gray-600">
              Don't have an account?{" "}
              <Link
                to="/sign-up"
                className="text-[#4AA6BB] hover:underline font-medium"
              >
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
