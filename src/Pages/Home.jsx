import Logo from 'assets/Images/logo-color.png';
import { Link } from 'react-router-dom';

function Home() {
  return (
    
        <div className="flex flex-col items-center justify-center gap-40 h-[100vh]">

            <div className='h-48 w-48'>
                <img className='w-full h-full' 
                     src={Logo} 
                     alt="Logo" 
                    />
            </div>

            <div className='flex justify-around items-center '>
                <div className='w-2/4 text-center font-semibold basis-2/3 '>
                    <h1 className='text-black text-5xl tracking-widest leading-normal'>
                        BookShelf <br/>
                        <span className='text-purple-700'>
                            Your Personal Library and Social Network Bookmarks
                        </span>
                    </h1>
                </div>

                <div>
                  <button className='btn btn-primary rounded-md px-5 py-1 text-2xl '>
                        <Link to ="/signup">Register</Link>
                  </button>
                  <button className='btn btn-warning rounded-md px-5 py-1 text-2xl ml mx-3'>
                        <Link to ="/login">Login</Link>
                  </button>
                </div>
            </div>
        </div>
   
  );
}

export default Home;
