import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import musicRelease from "../assets/img/music-release.png";
import chatbot from "../assets/img/chatbot.png";
import businesSite from "../assets/img/business-site.png";
import happyThought from "../assets/img/happy-thought.png";
import weatherForecast from "../assets/img/weather-forecast.png";
import labWork from "../assets/img/lab-work.png";
import quizApp from "../assets/img/quiz-app.png";
import survey from "../assets/img/survey.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Music Release",
      description: "Single page design",
      tech: "HTML5, CSS3, React, API",
      imgUrl: musicRelease,
      url:"https://gracious-hodgkin-9dd75b.netlify.app/",
      github: "https://github.com/eyahya-khan/project-music-releases"
    },
    {
      title: "Chatbot",
      description: "Single page interactive chatting page",
      tech: "HTML5, CSS3, JavaScript",
      imgUrl: chatbot,
      url:"https://clever-mccarthy-6188b5.netlify.app/",
      github: "https://github.com/eyahya-khan/project-chatbot"
    },
    {
      title: "Business site",
      description: "Login Form and FAQ page design",
      tech: "HTML5, CSS3, JavaScript",
      imgUrl: businesSite,
      url:"https://condescending-wright-37de5e.netlify.app/",
      github: "https://github.com/eyahya-khan/project-business-site"
    },
    {
      title: "Happy Thought",
      description: "Single comment page",
      tech: "HTML5, CSS3, React",
      imgUrl: happyThought,
      url:"https://glowing-cat-9f10e8.netlify.app",
      github: "https://github.com/eyahya-khan/project-happy-thoughts"
    },
    {
      title: "Weather App",
      description: "Today's weather and next 5 days forecast",
      tech: "HTML5, CSS3, JavaScript, API",
      imgUrl: weatherForecast,
      url:"https://frosty-northcutt-a6eacd.netlify.app/",
      github: "https://github.com/eyahya-khan/project-weather-app"
    },
    {
      title: "ITHögskolan Lab task",
      description: "First time lab work using Nextjs & API",
      tech: "HTML5, CSS3, Nextjs, API",
      imgUrl: labWork,
      url:"https://nextjs-external-api.eyahya-khan.vercel.app/",
      github: "https://github.com/eyahya-khan/nextjs-external-API"
    },
    {
      title: "Quiz app",
      description: "Choose correct answer and get result at the end",
      tech: "HTML5, CSS3, React",
      imgUrl: quizApp,
      url:"https://silly-mayer-8347a7.netlify.app/",
      github: "https://github.com/eyahya-khan/react-quizApp-using-useState"
    },
    {
      title: "Survey",
      description: "Survey for a program",
      tech: "HTML5, CSS3, React",
      imgUrl: survey,
      url:"https://cranky-wescoff-f5b98a.netlify.app/",
      github: "https://github.com/eyahya-khan/project-survey"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>During study period I did lots of projects</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Frontend</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Fullstack</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Game</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" alt="I" src={colorSharp2}/>
    </section>
  )
}
