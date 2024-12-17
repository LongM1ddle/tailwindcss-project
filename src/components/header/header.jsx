import dumbell from "../../assets/dumbell.svg";
import logoutpic from "../../assets/logout.svg";
import pfp from "../../assets/pfp.svg";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../api/authApi";

export const Header = () => {
    const navigate = useNavigate()
    const HandlerLogout = async () => {
        await logout();
        navigate("/");
      };
  return (
    <div className="header">
      <h2>UniWorkout</h2>
      <div className="header-buttons">
        <Link to="/workout">
          <img className="header-button" src={dumbell}></img>
        </Link>
        <Link >
          <img className="header-button" src={pfp}></img>
        </Link>
        <Link>
          <img onClick={HandlerLogout} className="header-button" src={logoutpic}></img>
        </Link>
      </div>
    </div>
  );
};
