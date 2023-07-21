'use client'
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const page = ({ params }) => {
  const router = useRouter();
  const [userData, setUserData] = useState([])
  const inLogOut = async () => {
    try {
      const logout = axios.get("/api/users/logout");
      console.log(logout);
      if (logout) {
        toast.success("logged out");
      }
      router.push('/login')
    } catch (error) {
      console.log(error.message);
    }
  };

  const getUserData  = async() => {
    const data = await axios.get('/api/users/me')
    setUserData(data?.data?.data);
    console.log(userData);

  }
  useEffect(() => {
    // Fetch user data on component mount
    getUserData();
  }, []);

  return (
    <>
      <div>
        {" "}
        <h1>
          userID - <span className="font-bold  ">{params.id}</span>
        </h1>
        <button onClick={inLogOut} className="btn mb-4">
          LogOut
        </button>
        <br />
        <button onClick={getUserData} className="btn ">Show</button>

        <div className="border grid justify-center items-center my-4 py-4">
          <h1>name: {userData?.username} </h1>
       </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default page;
