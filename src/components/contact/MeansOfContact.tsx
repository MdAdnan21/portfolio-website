import { useContext } from "react";
import {
  GmailDarkIcon,
  GmailIcon,
  LinkedInContactIcon,
} from "../../assets/icons/icons";
import ContactCard from "./ContactCard";
import "./contact.scss";
import { ThemeContext } from "../../App";

interface MeansOfContactProps {}

const MeansOfContact: React.FunctionComponent<MeansOfContactProps> = () => {
  const theme = useContext(ThemeContext);

  const contacts = [
    {
      icon: theme.isDarkmode ? <GmailDarkIcon /> : <GmailIcon />,
      appText: "Send me an email",
      appDetails: (
        <a
          href="mailto:mohammedadnan.3107@gmail.com"
          aria-label="send lakes a mail"
        >
          mohammedadnan.3107@gmail.com{" "}
        </a>
      ),
    },
    // {
    //   icon: <TwitterContactIcon />,
    //   appText: "Follow me on Twitter",
    //   appDetails: (
    //     <a
    //       href="https://twitter.com/lakes__xo_"
    //       target="_blank"
    //       rel="noreferrer"
    //       aria-label="follow lakes on twitter"
    //     >
    //       @lakes__xo_
    //     </a>
    //   ),
    // },
    {
      icon: <LinkedInContactIcon />,
      appText: "Connect with me on LinkedIn",
      appDetails: (
        <a
          href="https://www.linkedin.com/in/mohammed-adnan-t-775410243/"
          target="_blank"
          rel="noreferrer"
          aria-label="connect with Lakes on Linkedin"
        >
          Mohammed Adnan
        </a>
      ),
    },
  ];
  return (
    <div className={theme.isDarkmode ? "flexMeansDark" : "flexMeans"}>
      {contacts.map((contact) => (
        <ContactCard
          key={contact.appText}
          icon={contact.icon}
          appName={contact.appText}
          details={contact.appDetails}
        />
      ))}
    </div>
  );
};

export default MeansOfContact;
