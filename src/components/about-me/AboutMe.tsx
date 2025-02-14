import { useContext } from "react";
import "./about.scss";
import { ThemeContext } from "../../App";
import AnimatedText from "../animatedText/AnimatedText";

interface AboutMeProps {}

const AboutMe: React.FunctionComponent<AboutMeProps> = () => {
  const theme = useContext(ThemeContext);
  return (
    <div className={theme.isDarkmode ? "abtMewrapperDark" : "abtMewrapper"}>
      <div className="abtCont">
        <img
          src="https://media.istockphoto.com/id/1265176370/photo/portrait-of-a-confident-young-businessman.jpg?s=612x612&w=0&k=20&c=Hr5Rn3WlBied-o4Qu2LiRc6wP_eHI8UMG9rl1v-_a9s="
          alt="ridwan ajanaku"
        />
        <div className="details">
          <AnimatedText
            text="About Adnan."
            className={theme.isDarkmode ? "meetDark" : "meet"}
            once
          />
          <p className={theme.isDarkmode ? "deetsTDark" : "deetsT"}>
            I am a Frontend Developer with 1 year of experience, specializing in
            React, Next.js, TanStack Query, and Zod validation. He is passionate
            about building intuitive, high-performance web applications with a
            strong emphasis on efficiency, scalability, and maintainability.
          </p>
          <p className={theme.isDarkmode ? "deetsTDark" : "deetsT"}>
            In my previous role, I have played a key role in developing admin
            panels and e-commerce platforms, ensuring seamless user experiences
            and optimized workflows. His expertise in state management, API
            integration, and data validation has contributed to the success of
            multiple projects.
          </p>
          <p className={theme.isDarkmode ? "deetsTDark" : "deetsT"}>
            With a detail-oriented approach and a commitment to writing clean,
            reusable code, I have continuously enhances his skills to stay ahead
            of industry trends. He thrives in collaborative environments and is
            always eager to tackle new challenges in frontend development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
