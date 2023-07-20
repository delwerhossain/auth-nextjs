import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className="flex gap-12 justify-center items-center h-screen ">
        <Link className="btn btn-warning" href="/signup">
          SignUp
        </Link>
        <Link className="btn btn-success" href="/login">
          Login
        </Link>
      </div>
    </>
  );
}
