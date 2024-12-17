import { Header } from "../header/header";
import "./workout.css";
import model_image from "../../assets/model.svg";

export const WorkoutPage = () => {
  return (
    <>
      <Header />
      <div className="banner">

        <div className="banner-text">
          <h2>TRANSFORM YOUR LIFE WITH FITLIFE STUDIO</h2>
          <p>
            Join FitLife Studio Today and Experience Expert Training,
            Personalized Programs, and a Supportive Community to Achieve Your
            Fitness Goals.
          </p>
          <div className="banner-model">
          <img src={model_image}></img>
          </div>
        </div>
      </div>
    </>
  );
};
