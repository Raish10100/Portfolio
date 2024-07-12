import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiRender ,
  SiStudio3T ,
  SiNetlify,
  SiRazorpay ,
} from "react-icons/si";

import { DiGit, DiGithubBadge } from "react-icons/di";

import { FaWindows } from 'react-icons/fa'

import { IoLogoFigma } from "react-icons/io5";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiStudio3T  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGithubBadge  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRender  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <IoLogoFigma  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRazorpay   />
      </Col>
    </Row>
  );
}

export default Toolstack;
