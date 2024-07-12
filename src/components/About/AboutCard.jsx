import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="blue">Raish Vadaviya </span>
            from <span className="blue"> Gujarat, India.</span>
            <br />
            I am Full Stack Developer.
            <br />
            I completed a MERN stack development course from PW Skills, where I built a strong foundation through numerous assignments and projects.
            <br />
          </p>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Raish</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
