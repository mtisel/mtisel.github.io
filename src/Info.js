import React from "react";
import "./App.css";

const Info = () => {
  return (
    <React.Fragment>
      <div className="introText">
        <p>
          Hi - I'm Maja, a designer currently living and working in Berlin.
          Regardless the medium I establish daring concepts, bold visual appeal
          and concrete usability across various platforms. I approach projects
          holistically as I am zooming-out to understand overarching purpose of
          the project and zooming-in to ensure meticulous design.{" "}
        </p>{" "}
      </div>
      <div className="subInfo">
        <div>
          CONTACT<p>maja.tisel@gmail.com</p>
          <a href="https://www.linkedin.com/in/maja-tisel-71147b1a3/">
            LinkedIn
          </a>
          <p></p>
          <a href="https://vimeo.com/majatisel">Vimeo</a>
        </div>
        <div>
          CURRENTLY
          <p>
            Working at N26,<br></br>Berlin
          </p>
        </div>
        <div>
          EDUCATION
          <p>
            MA at Aalto University,<br></br>Helsinki
          </p>
        </div>
        <div>
          WORK AREAS<p>Design Strategy</p>
          <p>Branding</p>
          <p>Art Direction</p>
          <p>UX Design</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Info;
