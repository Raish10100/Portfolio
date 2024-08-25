import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../../Helpers/Particle";
import "./Projects.css";
import ProjectsData from "../../Constants/ProjectsData";

function Projects() {
  const [filterItem, setFilterItem] = useState("HTML + CSS");

  const filterHandler = (e) => {
    const filter = document.querySelectorAll(".project-filter button");
    // filter.forEach(button => button.addEventListener('click', (e) => setFilterItem(e.target.value)))
    console.log(filter);

    for (let button of filter) {
      console.log(button.textContent);
      if (button.textContent === e.target.textContent) {
        button.classList.add("selected");
      } else {
        button.classList.remove("selected");
      }
    }

    setFilterItem(e.target.textContent);
    // console.log(e.target.textContent)
  };

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="blue">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Showcasing My Expertise in Web Development
        </p>
        <div className="project-filter">
          <button className="selected" onClick={(e) => filterHandler(e)}>HTML + CSS</button>
          <button onClick={(e) => filterHandler(e)}>Vanilla JS</button>
          <button onClick={(e) => filterHandler(e)}>React JS</button>
          <button  onClick={(e) => filterHandler(e)}>
            Full Stack
          </button>
        </div>

        <hr className="line" />
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {ProjectsData.map((Project, index) => {
            return Project.FilterCat && Project.FilterCat === filterItem ? (
              <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={Project.Img}
                  title={Project.Title}
                  description={Project.Description}
                  ghLink={Project.GhLink}
                  demoLink={Project.DemoLink}
                  createdAt={Project.CreatedAt}
                  tech={Project.Tech}
                  vidPath={Project?.Video}
                  key={index}
                />
                {console.log(Project?.Video)}
              </Col>
            ) : (
              ""
            );
          })}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
