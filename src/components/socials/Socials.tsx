import {
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
} from "../../assets/icons/icons";
import "./socials.scss";

interface SocialsProps {}

const Socials: React.FunctionComponent<SocialsProps> = () => {
  return (
    <div className="socialswrapper">
      <a
        className="socialIcons"
        href="https://github.com/MdAdnan21?tab=repositories"
        target="_blank"
        rel="noreferrer"
        aria-label="link to lakes github account"
      >
        <GithubIcon />
      </a>
      <a
        className="socialIcons"
        href="https://www.instagram.com/yours_adnan/"
        target="_blank"
        rel="noreferrer"
        aria-label="link to lakes instagram account"
      >
        <InstagramIcon />
      </a>
      <a
        className="socialIcons"
        href="https://www.linkedin.com/in/mohammed-adnan-t-775410243/"
        target="_blank"
        rel="noreferrer"
        aria-label="link to lakes linkedin account"
      >
        <LinkedInIcon />
      </a>
    </div>
  );
};

export default Socials;
