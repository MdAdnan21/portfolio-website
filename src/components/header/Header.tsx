import { useContext, useEffect, useState, useRef } from "react";
import { LightModeIcon, MoonIcon } from "../../assets/icons/icons";
import "./header.scss";
import { useNavigate, useLocation } from "react-router-dom";
import { ThemeContext } from "../../App";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useContext(ThemeContext);
  const headerRef = useRef<HTMLDivElement>(null);

  const [position, setPosition] = useState(window.scrollY);
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 820);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const moving = window.scrollY;
      setVisible(position < moving);

      if (moving < 80) setVisible(false);

      setPosition(moving);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 820);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [position]);

  useEffect(() => {
    if (theme.isDarkmode) {
      headerRef.current?.classList.replace(
        "headerWrapper",
        "headerWrapperDark",
      );
    } else {
      headerRef.current?.classList.replace(
        "headerWrapperDark",
        "headerWrapper",
      );
    }
  }, [theme.isDarkmode]);

  const goTo = (path: string) => {
    navigate(path);
    scrollTo(0, 0);
    setMenuOpen(false);
  };

  return (
    <div
      ref={headerRef}
      className={visible ? "hidden headerWrapper" : "visible headerWrapper"}
    >
      <div className="header">
        <div className="logo" onClick={() => goTo("/")}>
          <img src="/images/logo.png" alt="Mohammed Adnan Logo" />
        </div>

        {isMobile ? (
          <div className="mobileNav">
            <button
              className={theme.isDarkmode ? "themeDark" : "theme"}
              onClick={() => theme.toggleTheme()}
            >
              {theme.isDarkmode ? <LightModeIcon /> : <MoonIcon />}
            </button>

            <button
              className={`menuBtn ${menuOpen ? "active" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <div
              className={`mobileMenu ${
                menuOpen ? (theme.isDarkmode ? "open dark" : "open") : ""
              }`}
            >
              <button className="closeBtn" onClick={() => setMenuOpen(false)}>
                ✕
              </button>

              <p
                onClick={() => goTo("/")}
                className={location.pathname === "/" ? "activeLink" : ""}
              >
                Home
              </p>

              <p
                onClick={() => goTo("/about")}
                className={location.pathname === "/about" ? "activeLink" : ""}
              >
                About me
              </p>

              <p
                onClick={() => goTo("/works")}
                className={location.pathname === "/works" ? "activeLink" : ""}
              >
                Works
              </p>

              <p
                onClick={() => goTo("/contact")}
                className={location.pathname === "/contact" ? "activeLink" : ""}
              >
                Contact me
              </p>

              <a href="/Resume.pdf" target="_blank">
                <p>Resumé</p>
              </a>
            </div>
          </div>
        ) : (
          <div className="header-links">
            <p
              onClick={() => goTo("/")}
              className={location.pathname === "/" ? "activeLink" : ""}
            >
              Home
            </p>

            <p
              onClick={() => goTo("/about")}
              className={location.pathname === "/about" ? "activeLink" : ""}
            >
              About me
            </p>

            <p
              onClick={() => goTo("/works")}
              className={location.pathname === "/works" ? "activeLink" : ""}
            >
              Works
            </p>

            <p
              onClick={() => goTo("/contact")}
              className={location.pathname === "/contact" ? "activeLink" : ""}
            >
              Contact me
            </p>

            <a href="/Resume.pdf" target="_blank">
              <p>Resumé</p>
            </a>

            <button
              className={theme.isDarkmode ? "themeDark" : "theme"}
              onClick={() => theme.toggleTheme()}
            >
              {theme.isDarkmode ? <LightModeIcon /> : <MoonIcon />}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
