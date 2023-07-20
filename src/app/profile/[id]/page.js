'use client'
import axios from "axios";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const page = ({ params }) => {
const router = useRouter();
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
  return (
    <>
      <div>
        {" "}
        <h1>
          userID - <span className="font-bold  ">{params.id}</span>
        </h1>
        <button onClick={inLogOut} className="btn">
          LogOut
        </button>
        <ToastContainer />
      </div>
    </>
  );
};

export default page;
