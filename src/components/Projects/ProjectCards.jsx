import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { formatDistanceToNow } from "date-fns";
import { FaVideo } from "react-icons/fa6";
// import UMS from '../../Assets/Videos/User_Management_System_mzq8d3.mp4'

function ProjectCards(props) {
  const [playVideo, setPlayVideo] = useState(false);

  const handleVid = () => {
    setPlayVideo((pre) => !pre);
  };

  return (

    <Card className="project-card-view">
      <Card.Title className="title">{props.title}</Card.Title>
      {!playVideo && (
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      )}
      {console.log(props?.vidPath)}
      {props?.vidPath && playVideo && (
        <video src={props?.vidPath} controls autoPlay>
          <source src={props?.vidPath} type="video/mp4" />
        </video>
      )}

      {!playVideo && (
        <span className="up-date">
          •{" "}
          {formatDistanceToNow(new Date(props.createdAt), { addSuffix: true })}
        </span>
      )}
      {props?.vidPath && (
        <FaVideo className="video-icon" style={{cursor: "pointer"}} onClick={() => handleVid()} />
      )}
      <Card.Body>
        <Card.Text>
          <strong className="tech">Technology: </strong> {props.tech}
        </Card.Text>
        <Card.Text>
          <strong className="desc">Desc: </strong> {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub style={{ marginBottom: "5px" }} /> GitHub
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link  then, it will render the below component  */}

        {props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            className="btn"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite style={{ marginBottom: "5px" }} /> {"Live"}
          </Button>
        )}
      </Card.Body>
    </Card>

  );
}
export default ProjectCards;
