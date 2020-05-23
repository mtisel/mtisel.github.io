import React, { Component } from "react";
import "./App.css";
import styled from "styled-components";
import Memberships1 from "./images/Memberships1.jpg";
import Memberships2 from "./images/Memberships2.jpg";
import Memberships3 from "./images/Memberships3.png";
import Daylight1 from "./images/Daylight1.jpg";
import Daylight2 from "./images/Daylight2.gif";
import Tiger1 from "./images/Tiger1.png";
import Rebrand1 from "./images/Rebrand1.gif";
import Reason1 from "./images/Reason1.jpg";
import Reason2 from "./images/Reason2.jpg";
import Reason3 from "./images/Reason3.gif";
import Mag1 from "./images/Mag1.jpg";
import Mag2 from "./images/Mag2.png";
import Mag3 from "./images/Mag3.jpg";
import Balanced1 from "./images/Balanced1.gif";
import Balanced2 from "./images/Balanced2.jpg";
import Balanced3 from "./images/Balanced3.jpg";
import Pride1 from "./images/Pride1.png";
import Pride2 from "./images/Pride2.png";
import Pride3 from "./images/Pride3.png";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [
        {
          id: 0,
          title: "Day Light in Helsinki",
          subtitle: "Data Visualization ",
          url: "yyy.com",
          image: Daylight1,
          posXDesktop: "15%",
          posYDesktop: "50%",
          posXMobile: "20%",
          posYMobile: "70%",
          imageHeightDesktop: "45%",
          imageHeightMobile: "30%",
          image2: Daylight2,
          image2HeightDesktop: "35%",
          image2HeightMobile: "25%",
          posXDesktop2: "70%",
          posYDesktop2: "40%",
          posX2Mobile: "10%",
          posY2Mobile: "10%",
        },
        {
          id: 1,
          title: "N26",
          subtitle: "Rebrand ",
          url: "zzz.com",
          image: Rebrand1,
          posXDesktop: "5%",
          posYDesktop: "20%",
          posXMobile: "10%",
          posYMobile: "10%",
          imageHeightDesktop: "50%",
          imageHeightMobile: "25%",
        },
        {
          id: 2,
          title: "Smoking Tiger",
          subtitle: "Event Design ",
          url: "xxx.com",
          image: Tiger1,
          posXDesktop: "60%",
          posYDesktop: "20%",
          imageHeightDesktop: "70%",
          posXMobile: "10%",
          posYMobile: "10%",
          imageHeightMobile: "40%",
          // image2: Tiger1,
          // posX2: 1000,
          // posY2: 400,
          // image2Height: "60px"
        },
        {
          id: 3,
          title: "26 reasons",
          subtitle: "Campaign ",
          url: "xyz.com",
          image: Reason1,
          posXDesktop: "25%",
          posYDesktop: "55%",
          posXMobile: "10%",
          posYMobile: "10%",
          imageHeightDesktop: "40%",
          imageHeightMobile: "20%",
          image2: Reason2,
          posXDesktop2: "60%",
          posYDesktop2: "8%",
          posXMobile2: "10%",
          posYMobile2: "70%",
          image2HeightDesktop: "35%",
          image2HeightMobile: "20%",
          image3: Reason3,
          posXDesktop3: "5%",
          posYDesktop3: "5%",
          posXMobile3: "30%",
          posYMobile3: "40%",
          image3HeightDesktop: "35%",
          image3HeightMobile: "20%",
        },
        {
          id: 4,
          title: "Memberships",
          subtitle: "Art Direction ",
          url: "zyx.com",
          image: Memberships1,
          posXDesktop: "50%",
          posYDesktop: "20%",
          posXMobile: "10%",
          posYMobile: "10%",
          imageHeightDesktop: "30%",
          imageHeightMobile: "15%",
          image2: Memberships2,
          posXDesktop2: "70%",
          posYDesktop2: "45%",
          posXMobile2: "20%",
          posYMobile2: "30%",
          image2HeightDesktop: "50%",
          image2HeightMobile: "25%",
          image3: Memberships3,
          posXDesktop3: "10%",
          posYDesktop3: "65%",
          posXMobile3: "70%",
          posYMobile3: "80%",
          image3HeightDesktop: "30%",
          image3HeightMobile: "10%",
        },
        {
          id: 5,
          title: "Pride Berlin '19",
          subtitle: "Campaign ",
          url: "zyx.com",
          image: "https://picsum.photos/400",
          image: Pride1,
          posXDesktop: "10%",
          posYDesktop: "40%",
          posXMobile: "10%",
          posYMobile: "10%",
          imageHeightDesktop: "35%",
          imageHeightMobile: "15%",
          image2: Pride2,
          posXDesktop2: "70%",
          posYDesktop2: "66%",
          posXMobile2: "10%",
          posYMobile2: "30%",
          image2HeightDesktop: "30%",
          image2HeightMobile: "25%",
          image3: Pride3,
          posXDesktop3: "50%",
          posYDesktop3: "4%",
          posXMobile3: "50%",
          posYMobile3: "70%",
          image3HeightDesktop: "35%",
          image3HeightMobile: "10%",
        },
        {
          id: 6,
          title: "Balanced Day",
          subtitle: "Event Design ",
          url: "zyx.com",
          image: Balanced3,
          posXDesktop: "10%",
          posYDesktop: "5%",
          posXMobile: "60%",
          posYMobile: "70%",
          imageHeightDesktop: "45%",
          imageHeightMobile: "30%",
          image2: Balanced2,
          posXDesktop2: "70%",
          posYDesktop2: "15%",
          posXMobile2: "30%",
          posYMobile2: "10%",
          image2HeightDesktop: "30%",
          image2HeightMobile: "15%",
          image3: Balanced1,
          posXDesktop3: "55%",
          posYDesktop3: "60%",
          posXMobile3: "10%",
          posYMobile3: "30%",
          image3HeightDesktop: "35%",
          image3HeightMobile: "20%",
        },
        {
          id: 7,
          title: "Remediation",
          subtitle: "New Media Art",
          url: "zyx.com",
          image: Mag1,
          posXDesktop: "5%",
          posYDesktop: "45%",
          posXMobile: "60%",
          posYMobile: "10%",
          imageHeightDesktop: "40%",
          imageHeightMobile: "15%",
          image2: Mag2,
          posXDesktop2: "60%",
          posYDesktop2: "10%",
          posXMobile2: "10%",
          posYMobile2: "35%",
          image2HeightDesktop: "35%",
          image2HeightMobile: "25%",
          image3: Mag3,
          posXDesktop3: "70%",
          posYDesktop3: "65%",
          posXMobile3: "10%",
          posYMobile3: "70%",
          image3HeightDesktop: "30%",
          image3HeightMobile: "15%",
        },
      ],
    };
  }

  //render starts here -----------------------
  render() {
    const isMobile = window.innerWidth < 768;
    console.log(window.innerWidth);

    function Slash(props) {
      if (props.projectId % 2 == 0) {
        return <StyledSlash className="projectSlash"> / </StyledSlash>;
      }
      return null;
    }

    function DynamicSlashing(props) {
      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        return null;
      }
      return <Slash projectId={props.projectId}> </Slash>;
    }

    function DynamicBreaking(props) {
      if (props.projectId % 2 == 1) {
        return <br />;
      }
      return null;
    }

    function BreakingProjectTile(props) {
      if (isMobile) {
        return null;
      }
      return <DynamicBreaking projectId={props.projectId}></DynamicBreaking>;
    }

    const ProjectTile = styled.div`
      text-decoration: none;
      display: inline;
      color: black;
      &:hover {
        color: #b70303;
      }
    `;

    const StyledSlash = styled.span`
      text-decoration: none;
      display: inline;
      color: black;
    `;

    const ProjectImage = styled.div`
      visibility: hidden;
      align-items: center;
      justifycontent: center;
      position: fixed;
      backgroundcolor: rgba(0, 0, 0, 0);
      ${ProjectTile}:hover & {
        visibility: visible;
      }
    `;

    return (
      <React.Fragment>
        <div className="projectList">
          {this.state.projects.map((project) => (
            <ProjectTile key={project.id}>
              <a className="projectTitle" href={""}>
                {project.title}
              </a>
              <span className="arrow"> → </span>
              <a className="projectSubtitle" href={""}>
                {project.subtitle}
              </a>
              <DynamicSlashing projectId={project.id}></DynamicSlashing>
              <BreakingProjectTile projectId={project.id}></BreakingProjectTile>

              <ProjectImage>
                <img
                  src={project.image}
                  style={{
                    position: "fixed",
                    left: isMobile ? project.posXMobile : project.posXDesktop,
                    top: isMobile ? project.posYMobile : project.posYDesktop,
                    height: isMobile
                      ? project.imageHeightMobile
                      : project.imageHeightDesktop,
                  }}
                ></img>
                <img
                  src={project.image2}
                  style={{
                    position: "fixed",
                    left: isMobile ? project.posXMobile2 : project.posXDesktop2,
                    top: isMobile ? project.posYMobile2 : project.posYDesktop2,
                    height: isMobile
                      ? project.image2HeightMobile
                      : project.image2HeightDesktop,
                  }}
                ></img>
                <img
                  src={project.image3}
                  style={{
                    position: "fixed",
                    left: isMobile ? project.posXMobile3 : project.posXDesktop3,
                    top: isMobile ? project.posYMobile3 : project.posYDesktop3,
                    height: isMobile
                      ? project.image3HeightMobile
                      : project.image3HeightDesktop,
                  }}
                ></img>
              </ProjectImage>
            </ProjectTile>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
