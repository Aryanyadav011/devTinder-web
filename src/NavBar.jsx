import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "./utils/constants";
import axios from "axios";
import { removeUser } from "./utils/userSlice";

const NavBar = ()=>{
  const user = useSelector((store)=>store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //console.log(user);
  const handleLogout = async()=>{
    try{
      await axios.post(BASE_URL + "/logout",{},{withCredentials:true});
      dispatch(removeUser());
      return navigate ("/login");


    }
    catch(err){
      //error 

    }
  }
  

    return  (
    <div className="navbar bg-red-600">
    <div className="flex-1">
      <Link to="/"className="btn btn-ghost text-xl">👨🏼‍💻DevTinder</Link>
    </div>
    <div className="flex-none gap-2">
      <div className="form-control">
        {/* <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" /> */}
      </div>
      {user && <div className="dropdown dropdown-end mx-5 flex ">
        <p className="px-4">Welcome, {user.firstName}</p>
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img
              alt="user photo"
              src= "https://avatars.githubusercontent.com/u/129043520?s=400&u=fcef3903960416103b099fbdaa2cd57656bea2d7&v=4"/>
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li>
            <Link to="/profile"className="justify-between">
              Profile
              <span className="badge">New</span>
            </Link>
          </li>
          <li><Link to="/connections">Connections</Link></li>
          <li><Link to="/requests"> Requests</Link></li>
          <li><a onClick={handleLogout}>Logout</a></li>
        </ul>
      </div>}
    </div>
  </div>
  );
};
export default NavBar;