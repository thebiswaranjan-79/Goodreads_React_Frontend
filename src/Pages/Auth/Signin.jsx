import { Link } from "react-router-dom";

function Signin() {
  return (
    <div className="h-[100vh] flex flex-col items-center justify-center">
        <div>
            <h1 className="text-black text-5xl">Login to your Account</h1>
        </div>

        <div className="mt-4">
            <p className="text-black font-bold">
                Do not have an Account ? 
                <Link  to='/signup'>
                    <button className="btn btn-success rounded-md px-2  mx-5 hover:bg-green-600">
                        Sign Up
                    </button>
                </Link>
            </p>
        </div>
        <div className="w-full">
            <form className="flex flex-col justify-center items-center w-3/4 mx-auto " autoComplete="off">
    
                <div className="my-5 ">
                    <input type="email"
                           placeholder="Email..."
                           className="px-8 py-3 border-2 border-indigo-600"
                    />
                </div>

                <div className="my-5 ">
                    <input type="password"
                           placeholder="Password..."
                           className="px-8 py-3 border-2 border-indigo-600"
                    />
                </div>

                <div className="my-5 ">
                     <button type="submit" className="btn w-full btn-success rounded-md px-2 py-1">Submit</button>
                </div>
            </form>
        </div>
    </div>
  );
}

export default Signin;
