import Link from "next/link";

const layout = ({ children }) => {
  return (
    <>
      <div className="flex gap-12 justify-center items-center my-4 ">
        <Link className="btn btn-warning" href="/signup">
          SignUp
        </Link>
        <Link className="btn btn-success" href="/login">
          Login
        </Link>
      </div>
      {children}
    </>
  );
};

export default layout;
