import "./Projects.scss";
import arrow from "../../../../assets/images/Vector.svg";
import arrow1 from "../../../../assets/images/Vector (1).svg";
import rectangle1 from "./Rectangle 17.svg";
import project1 from './project1.jpg'
import project2 from './project2.jpg'
import project3 from './project3.jpg'
import project4 from './project4.jpg'
import { ProjectCards } from "./ProjectCards";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      imageSrc: project1,
      title: "Wildstone Infra Hotel",
      address: "2715 Ash Dr. San Jose, South Dakota",
    },
    {
      id: 2,
      imageSrc: project2,
      title: "Wish Stone Building",
      address: "2972 Westheimer Rd. Santa Ana, Illinois",
    },
    {
      id: 3,
      imageSrc: project3,
      title: "Mr. Parkinston’s House",
      address: "3517 W. Gray St. Utica, Pennsylvania",
    },
    {
      id: 4,
      imageSrc: project4,
      title: "Oregano Height",
      address: "2464 Royal Ln. Mesa, New Jersey",
    },
    {
      id: 5,
      imageSrc: project1,
      title: "Wildstone Infra Hotel",
      address: "2715 Ash Dr. San Jose, South Dakota",
    },
  ];
  return (
    <div className="projects desktop-only">
      <h4>Projects</h4>
      <div className="project-right">
        <div className="all">
          <div>
            <img src={rectangle1} alt="" />
            <span>All</span>
          </div>
          <p>Commercial</p>
          <p>Residential</p>
          <p>Other</p>
        </div>

        <div className="project-cards">
          {projects.map((project) => (
            <ProjectCards
              imageSrc={project.imageSrc}
              title={project.title}
              address={project.address}
              key={project.id}
            />
          ))}
        </div>
      </div>
      <div className="bar">
        <button className="left">
          <div>
            <img src={arrow} alt="" />
            <p>Back</p>
          </div>
        </button>
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <button className="right">
          <div>
            <p>Next</p>
            <img src={arrow1} alt="" />
          </div>
        </button>
      </div>
    </div>
  );
};
