import dumbell from "../../assets/dumbell.svg";
import logoutpic from "../../assets/logout.svg";
import pfp from "../../assets/pfp.svg";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../api/authApi";

export const Header = () => {
  const navigate = useNavigate();
  const HandlerLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <div className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <h2 className="text-2xl font-bold text-black-600">UniWorkout</h2>

      <div className="flex items-center gap-4">
        <Link to="/workout">
          <img
            className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform"
            src={dumbell}
            alt="Workout"
          />
        </Link>
        <Link to="/profile">
          <img
            className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform"
            src={pfp}
            alt="Profile"
          />
        </Link>
        <button onClick={HandlerLogout}>
          <img
            className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform"
            src={logoutpic}
            alt="Logout"
          />
        </button>
      </div>
    </div>
  );
};
