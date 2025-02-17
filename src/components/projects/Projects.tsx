import { useContext } from "react";
import ProjectCard from "../project-card/ProjectCard";
import SectionHeading from "../section-heading/SectionHeading";
import "./projects.scss";
import { ThemeContext } from "../../App";
import { useLocation } from "react-router-dom";

interface ProjectsProps {}

export const projects = [
  {
    name: "FOODZY APP",
    description:
      "Implemented an optimized add-to-cart functionality with lazy loading to enhance performance and resource efficiency, while designing a high-performance, visually engaging, and responsive UI for a seamless user experience.",
    image:
      "https://res.cloudinary.com/duayvmlbg/image/upload/v1739779292/irwkyukskalwctyh1tw8.png",
    url: "https://food-bazaar-app-7tj4.vercel.app/",
  },
  {
    name: "Job Portal App",
    description:
      "Designed and developed a job portal application to streamline the hiring process, enabling job postings, company-based filtering, resume management, and an advanced search system for an improved user experience",
    image:
      "https://res.cloudinary.com/duayvmlbg/image/upload/v1739779386/r2pic7i7uynoy7kci6nn.png",
    url: "https://job-portal-web-ten.vercel.app/",
  },
  {
    name: "Hinox Web-App",
    description:
      "Spearheaded the design, development, and continuous optimization of the Hinox application’s user interface, ensuring a highly responsive, user-centric experience with seamless real-time interactions.",
    image:
      "https://res.cloudinary.com/duayvmlbg/image/upload/v1739779522/u0jgruyiayy4837wz4fc.png",
    url: "https://hinox-frontend-v4.vercel.app/launchpad",
  },

  {
    name: "Task Management App",
    description:
      "Developed a Task Management application featuring a to-do list with CRUD operations, enabling users to manage tasks across three main stages: To-Do, In Progress, and Completed, for enhanced productivity and organization",
    image:
      "https://res.cloudinary.com/duayvmlbg/image/upload/v1739780143/e8pmxvnojcgs2dcpxpsg.png",
    url: "https://task-management-eight-orcin.vercel.app/auth/login",
  },
];

const Projects: React.FunctionComponent<ProjectsProps> = () => {
  const theme = useContext(ThemeContext);
  const location = useLocation();
  return (
    <div
      className={theme.isDarkmode ? "projectContainerDark" : "projectContainer"}
    >
      <div
        className={theme.isDarkmode ? "projectWrapperDark" : "projectWrapper"}
      >
        {location.pathname === "/" && (
          <SectionHeading sectionName="Selected Projects" />
        )}
        <div className="projects">
          {projects.map((project, index) => (
            <ProjectCard
              projectName={project.name}
              image={project.image}
              description={project.description}
              key={project.name}
              link={project.url}
              index={index + 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
