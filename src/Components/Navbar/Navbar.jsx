import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  
  const links = (
    <>
      <li className="font-bold"><NavLink to="/">Home</NavLink></li>
      <li className="font-bold"><NavLink to="/coffees">Coffees</NavLink></li>
      <li className="font-bold"><NavLink to="/dashboard">Dashboard</NavLink></li>
    </>
  );

  return (
    <div className="navbar sticky top-0 bg-base-100 bg-opacity-20 backdrop-blur-lg ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className={`btn btn-ghost lg:hidden `}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <Link to="/" className="text-xl font-extrabold text-blue-950">Coffelaciouss</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal items-center gap-8 px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/coffees" className="btn bg-blue-950 font-bold border-none text-white">Get Coffee</Link>
      </div>
    </div>
  );
};

export default Navbar;
