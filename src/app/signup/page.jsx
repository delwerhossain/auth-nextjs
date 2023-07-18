"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const SignUp = () => {
  const router = useRouter();
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
  });
  const onSignUp = async () => {
    try {
      setLoading(true);
      const res = await axios.post(`/api/users/signup`, user);
      console.log("signup successful ", res.data);

      router.push("/login");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.username.length > 0 &&
      user.password.length > 0
    ) {
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);
    }
  }, [user]);
  console.log(user);
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-400">
      <div className="bg-white p-16 rounded shadow-2xl w-2/3">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">
          Create Your Account
        </h2>
        <h2 className="text-xl font-bold mb-10 text-gray-800">
          {loading ? "loading..." : "Sign up"}
        </h2>

        <div className="space-y-5">
          <div>
            <label className="block mb-1 font-bold text-gray-500">Name</label>
            <input
              type="text"
              name="username"
              value={user.name}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              placeholder="Enter your username"
              className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-bold text-gray-500">Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="Enter your Email"
              className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-bold text-gray-500">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="Enter your Password"
              className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
            />
          </div>

          <div className="flex items-center">
            <input type="checkbox" id="agree" />
            <label htmlFor="agree" className="ml-2 text-gray-700 text-sm">
              I agree to the terms and privacy.
            </label>
          </div>

          <button
            onClick={onSignUp}
            className="block w-full bg-yellow-400 hover:bg-yellow-300 p-4 rounded text-yellow-900 hover:text-yellow-800 transition duration-300 disabled:bg-slate-400  disabled:text-white"
            disabled={!buttonDisabled}
          >
            {buttonDisabled ? "  Sign Up" : "No Sign up"}
          </button>
        </div>
        <Link href="/login">Visit login page</Link>
      </div>
    </div>
  );
};

export default SignUp;
