import { Link, NavLink } from "react-router-dom";


const Nav = () => {
    return (
        <div>
            <div className="navbar bg-base-100 mx-auto max-w-6xl">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li>
            <NavLink  className={({ isActive }) =>
              isActive ? 'bg-green-500 text-white font-bold' : 'font-bold'
            } to='/'>
            Home
            </NavLink>
        </li>
        <li>
            <NavLink 
             className={({ isActive }) =>
             isActive ? 'bg-green-500 text-white font-bold' : 'font-bold'
           }
            to='/listedBooks'>
            Listed Books
            </NavLink>
        </li>
        <li>
            <NavLink
             className={({ isActive }) =>
             isActive ? 'bg-green-500 text-white font-bold' : 'font-bold'
           }
            to='/pageRead'>
            Page to Read
            </NavLink>
        </li>
        <li>
            <NavLink 
             className={({ isActive }) =>
             isActive ? 'bg-green-500 text-white font-bold' : 'font-bold'
           }
            to='/contact'>
              Contact us
            </NavLink>
        </li>
        <li>
            <NavLink 
             className={({ isActive }) =>
             isActive ? 'bg-green-500 text-white font-bold' : 'font-bold'
           }
            to='/review'>
            Review
            </NavLink>
        </li>
        <div>
    <a className="btn bg-blue-500 hover:bg-green-500 text-white">Sign up</a>
    </div>
      </ul>
    
    </div>
    <Link to='/' className="btn btn-ghost text-xl">Story Books</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
        <li>
            <NavLink 
             className={({ isActive }) =>
             isActive ? 'bg-green-500 text-white font-bold' : 'font-bold'
           } to='/'>
            Home
            </NavLink>
        </li>
        <li>
            <NavLink 
             className={({ isActive }) =>
             isActive ? 'bg-green-500 text-white font-bold' : 'font-bold'
           }
            to='/listedBooks'>
            Listed Books
            </NavLink>
        </li>
        <li>
            <NavLink 
             className={({ isActive }) =>
             isActive ? 'bg-green-500 text-white font-bold' : 'font-bold'
           }
            to='/pageRead'>
            Page to Read
            </NavLink>
        </li>
        <li>
            <NavLink 
             className={({ isActive }) =>
             isActive ? 'bg-green-500 text-white font-bold' : 'font-bold'
           }
            to='/contact'>
              Contact us
            </NavLink>
        </li>
        <li>
            <NavLink 
             className={({ isActive }) =>
             isActive ? 'bg-green-500 text-white font-bold' : 'font-bold'
           }
            to='/review'>
            Review
            </NavLink>
        </li>
        </ul>
  </div>
  <div className="navbar-end">
    <div className="mr-5">
    <a className="btn bg-green-500 hover:bg-blue-500 text-white">Sign in</a>
    </div>
    <div className="hidden sm:block">
    <a className="btn  bg-blue-500 hover:bg-green-500 text-white ">Sign up</a>
    </div>
  
  </div>
</div>
        </div>
    );
};

export default Nav;