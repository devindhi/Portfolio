import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Next.js Portfolio Website",
    description: "A portfolio created by next.js which showcase all my projects with the relevant descriptions. For styling this project Tailwind css and chakra ui is used.",
    image: "/portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/devindhi/Portfolio",
    vid: "/port.png",
    demo:"/"
  },
  {
    id: 2,
    title: "Hirely Website",
    description:
      "AI driven website that allows recruiters to hire easily.Technologies: React + Tailwind, Node + Express, MongoDB, Python, GPT-3.5 Turbo, for authentification and authorization clerk was used. A custom solution website that allows recruiters to post jobs and questions related to that role. An outside user can view the jobs and answer the questions related to the job position. A fine-tuned model then analyzes the answers submitted by the user and categorizes them into three categories: good, moderate, and bad, which are then shown to the recruiter.",

    image: "/hirely.png",
    tag: ["All", "Web"],
    vid:"/222.png",
    gitUrl: "https://github.com/devindhi/Hirely",
    demo: "https://drive.google.com/file/d/1Xi6Rj8Pl1_jNlLzA9uWNq95J-VQdyISF/view?usp=drive_link",
  },
  {
    id: 3,
    title: "Insta Clone",
    description: "An insta clone is created using the technologies react.js and firebase. state management like zustand is used in this project and vite as built tool.",
    image: "/insta3.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/devindhi/Instagram-clone",
    vid: "/insta.png",
    demo:"https://social-app-devindhi.vercel.app/"
  },
  {
    id: 4,
    title: "E-commerce Application",
    description: "An e-commerce platform. Technologies: Java| JavaSwing | MySql. A database that manages customers and a shopping cart GUI was created for the user and a console was created for the shop manager to manage the products in the shop.OOP concepts are properly included in this project, which makes this project a show case my knowledge in OOP concepts well",
    image: "/online.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/devindhi/Online-Shopping",
    demo: "https://drive.google.com/file/d/1SQeBlj-Rm7Br8WtJTs2tUVtNzOQnEj9y/view?usp=sharing",
    vid:"/shopping cart.png"
  },

  {
    id: 5,
    title: "Vehicle Repairo",
    description:"Vehicle Repairo. Technologies: React.js | React Native | Python(Flask) | MongoDB | Firebase. A group project. An application that drivers can use to receive the nearest mechanics, receive vehicle guidance to fix a minor problem, book appointments with mechanics, view ratings and reviews, and receive vehicle service reminders. A mobile application was created for the user and a separate website was created for the mechanics.",
    image: "/vehicle3.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/orgs/VehicleRepairo/dashboard",
    previewUrl: "/",
    vid:"/vehicle2.jpg"
  },
  {
    id: 6,
    title: "Appointment schedule",
    description: "A basic appointment scheduler which is made by java fx and is connected with mySql database. This application properly showcases all the CRUD operations.",
    image: "/appointment2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/devindhi/Appointment-Schedule-",
    vid: "/appointment.png",
    demo: "https://drive.google.com/file/d/1aZadBlySrQc_bOnDNROuVc4vwlM542iE/view?usp=drive_link",
  },
];
const ProjectSection = () => {
  return (
    <div id="projects">
      <h2 className="text-4xl font-bold text-white mb-8 mt-5 flex justify-center ">
        My Projects
      </h2>
      <div className="flex flex-wrap justify-center">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            vid={project.vid}
            gitUrl={project.gitUrl}
            demo={project.demo}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
