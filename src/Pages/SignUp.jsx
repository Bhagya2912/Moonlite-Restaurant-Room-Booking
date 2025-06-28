import { FaGoogle, FaFacebookF } from "react-icons/fa";

export default function SignUp({ onSwitchToSignIn }) {
  return (
    <div className="flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-6 text-center">Create Your Account</h2>

        {/* Name Input */}
        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-700">Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-700">Your Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
          />
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <label className="block mb-1 font-medium text-gray-700">Password</label>
          <input
            type="password"
            placeholder="Create a password"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
          />
        </div>

        {/* Sign Up Button */}
        <button className="w-full bg-blue-50 hover:bg-[#a8815e] text-black py-2 rounded font-medium mb-4">
          Register
        </button>

        {/* Divider */}
        <div className="flex items-center gap-2 my-4">
          <hr className="flex-1 border-gray-300" />
          <span className="text-gray-400">Or</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Social Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded py-2 hover:bg-[#a8815e]">
            <FaGoogle /> Continue with Google
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded py-2 hover:bg-[#a8815e]">
            <FaFacebookF /> Continue with Facebook
          </button>
        </div>

        {/* Login Link */}
        <p className="text-sm text-center mt-6">
          Already have an account?{" "}
          <span
  className="text-blue-600 hover:underline cursor-pointer"
  onClick={onSwitchToSignIn}
>
  Login
</span>
        </p>
      </div>
    </div>
  );
}

