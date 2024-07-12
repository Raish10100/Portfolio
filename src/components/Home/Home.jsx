import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeImg from "../../Assets/home-img-1.png";
import Particle from "../../Helpers/Particle";
import Type from "./Type";
import myImg from "../../Assets/home-img-2.jpg";
import Tilt from "react-parallax-tilt";
import './Home.css'
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Raish Vadaviya </strong>
                
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeImg}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="blue"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I'm a curious and driven <span className="blue"> MERN stack developer </span> with a passion for building innovative solutions that make a difference.
              <br />
              <br /> 
              I'm eager to apply my skills and knowledge to <span className="blue">real-world problems </span> and <span className="blue"> continue learning </span> from the best.
              <br />
              <br />
              With a strong foundation in MongoDB, Express, React, and Node.js, I'm well-versed in designing and developing <span className="blue"> scalable, efficient, and user-friendly </span> applications. My curiosity and enthusiasm for <span className="blue"> new technologies </span> drive me to stay up-to-date with the latest trends and advancements in the <span className="blue"> MERN stack ecosystem. </span>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <a href="https://www.linkedin.com/in/raish-vadaviya-439213289/">
              <img src={myImg} className="myImg" alt="avatar"  />
              </a>
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND <span className="blue"> ME </span> ON</h1>
            <p>
              Feel free to <span className="blue">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Raish10100"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/raish-vadaviya-439213289/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/RaishVadaviya"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/raish_vadaviya/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
    </section>
  );
}

export default Home;
