import { NavLink } from "react-router-dom";
import LogoWH from "../../assets/logo-wh.png";
const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-10">
        <NavLink to="/">
          <img src={LogoWH} alt="logo wealth health" className="w-20 h-20" />
        </NavLink>
        <div className="title">
          <h1 className="text-2xl font-bold text-white">HRnet</h1>
        </div>
      </div>
      <nav className="flex items-center gap-10 font-bold">
        <NavLink to="/" className="text-white">
          Create Employee
        </NavLink>
        <NavLink to="/employee-list" className="text-white">
          Employee List
        </NavLink>
      </nav>
    </div>
  );
};

export { Header };
