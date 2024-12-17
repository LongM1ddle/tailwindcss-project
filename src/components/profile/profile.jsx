import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/auth";
import { useEffect, useState } from "react";
import { GetProfile, logout } from "../api/authApi";
import "./profile.css"
import { Header } from "../header/header";
import main_pfp from "../../assets/main-user-pfp.svg"
import img_before from "../../assets/before.jpg"
import img_after from "../../assets/after.jpg"

export const Profile = () => {
  const navigate = useNavigate();
  const { isAuth, name, email, token } = useAuth();
  const [dataUser, setDatauser] = useState(undefined);

  useEffect(() => {
    if (!isAuth) {
      navigate("/");
    }
    if (!token) {
      setDatauser(null);
    }
  });

  useEffect(() => {
    if (!dataUser) {
      console.log(token);
      GetProfile(token).then((userdata) => {
        setDatauser(userdata);
        console.log(userdata.statistics);
      });
    }
  }, [dataUser]);

  return (
    <div className="app">
      {Header()}
      <div className="profile">
        <div className="avatar"> <img src={main_pfp}></img></div>
        <h2>{name}</h2>
        
      <div className="stats">
        {dataUser &&
          dataUser.statistics.map((element, index) => (
            <div key={index}>
              <p>{element.label}</p>
              <p className="numbers">{element.value}</p>
            </div>
          ))}
      </div>
      </div>


      <div className="comparison">
        <div>
          <p>Before</p>
          <img src={img_before} className="comparison-image" />
        </div>
        <div>
          <p>After</p>
          <img src={img_after} className="comparison-image" />
        </div>
      </div>
    </div>
  );
};

