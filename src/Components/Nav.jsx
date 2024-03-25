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
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost text-xl">Book Vibe</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
        <li>
            <NavLink to='/' activeClassName="border border-green-500 text-green-500" className="text-black">
            Home
            </NavLink>
        </li>
        <li>
            <NavLink to='/listedBooks' activeClassName="border border-green-500 text-green-500" className="text-black">
            Listed Books
            </NavLink>
        </li>
        <li>
            <NavLink to='/pageRead' activeClassName="border border-green-500 text-green-500" className="text-black">
            Page to Read
            </NavLink>
        </li>
        </ul>
  </div>
  <div className="navbar-end">
    <div className="mr-5">
    <a className="btn bg-green-500 hover:bg-blue-500 text-white">Sign in</a>
    </div>
    <div>
    <a className="btn bg-blue-500 hover:bg-green-500 text-white">Sign up</a>
    </div>
  
  </div>
</div>
        </div>
    );
};

export default Nav;