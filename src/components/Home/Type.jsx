import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Developer",
          "MERN Stack Engineer",
          "JavaScript Specialist",
          "Problem Solver",
          "Creative Thinker",
          "Continuous Learner",
          "Software Engineer",
          "Web Developer",
          "Tech Enthusiast"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
