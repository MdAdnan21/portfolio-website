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
        <div className="imgWrapper">
          <img
            src="/public/images/Adnan.png"
            alt="Mohammed Adnan"
          />
        </div>

        <div className="details">
          <AnimatedText
            text="About Adnan."
            className={theme.isDarkmode ? "meetDark" : "meet"}
            once
          />

          <p className={theme.isDarkmode ? "deetsTDark" : "deetsT"}>
            I'm Mohammed Adnan, a Frontend Developer with 4+ years of
            experience building modern, scalable, and high-performance web
            applications using React.js, Next.js, TypeScript, and JavaScript.
          </p>

          <p className={theme.isDarkmode ? "deetsTDark" : "deetsT"}>
            I specialize in crafting responsive user interfaces, reusable
            component architectures, API integrations, state management, and
            performance-focused frontend solutions that deliver seamless user
            experiences.
          </p>

          <p className={theme.isDarkmode ? "deetsTDark" : "deetsT"}>
            I’ve worked on admin dashboards, business platforms, e-commerce
            products, and custom internal tools — always focusing on clean
            code, maintainability, pixel-perfect UI, and real business impact.
          </p>

          <div className="aboutStats">
            <div className="statCard">
              <h3>4+</h3>
              <p>Years Experience</p>
            </div>

            <div className="statCard">
              <h3>20+</h3>
              <p>Projects Built</p>
            </div>

            <div className="statCard">
              <h3>100%</h3>
              <p>Client Focus</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;