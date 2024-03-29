import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { ProjectFullstackCard } from "./ProjectFullstackCard";
import { ProjectGameCard } from "./ProjectGameCard";
import musicRelease from "../assets/img/music-release.png";
import reduxQuiz from "../assets/img/redux-quiz.png";
import chatbot from "../assets/img/chatbot.png";
import businesSite from "../assets/img/business-site.png";
import happyThought from "../assets/img/happy-thought.png";
import weatherForecast from "../assets/img/weather-forecast.png";
import convoj from "../assets/img/convoj.png";
import quizApp from "../assets/img/quiz-app.png";
import survey from "../assets/img/survey.png";
import MovieList from "../assets/img/movieslist.png";
import reactTodo from "../assets/img/reactTodo.png";
import ecommerce from "../assets/img/ecommerce.png";
import frostEcom from "../assets/img/catStore.png";
import onlineEdu from "../assets/img/education.png";
import guessWho from "../assets/img/guess-who.png";
import tictactoe from "../assets/img/tictactoe.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Redux-quiz App",
      description: "Quiz for guessing butt of animal",
      tech: "React, Redux",
      imgUrl: reduxQuiz,
      url:"https://lambent-trifle-2e72be.netlify.app",
      github: "https://github.com/eyahya-khan/project-redux-quiz"
    },
    {
      title: "Småsatadens kommun",
      description: "Single page design for displaying employer work schedule",
      tech: "React, TypeScript, API",
      imgUrl: convoj,
      url:"https://subtle-treacle-89f57d.netlify.app/",
      github: "https://github.com/eyahya-khan/convoj"
    },
    {
      title: "Music Release",
      description: "Single page design for displaying music list from API",
      tech: "React, API",
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
      tech: "React",
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
      title: "Quiz app",
      description: "Choose correct answer and get result at the end",
      tech: "React",
      imgUrl: quizApp,
      url:"https://silly-mayer-8347a7.netlify.app/",
      github: "https://github.com/eyahya-khan/react-quizApp-using-useState"
    },
    {
      title: "Survey",
      description: "Survey for a program",
      tech: "React",
      imgUrl: survey,
      url:"https://cranky-wescoff-f5b98a.netlify.app/",
      github: "https://github.com/eyahya-khan/project-survey"
    },
    {
      title: "Movie List",
      description: "Displaying movie list from API and details of specific movie when click on it.",
      tech: "React, API",
      imgUrl: MovieList,
      url:"https://gentle-empanada-7989b9.netlify.app",
      github: "https://github.com/eyahya-khan/project-movie"
    },
    {
      title: "Todo App",
      description: "Todo App with CRUD function",
      tech: "React",
      imgUrl: reactTodo,
      url:"https://radiant-jalebi-f47137.netlify.app/",
      github: "https://github.com/eyahya-khan/react-todo-app"
    },
  ];

  const Fullstack = [
    {
      title: "ECommerce",
      description: "Full fledge ecommerce site",
      tech: "C#, .NET MVC, React, MS SQL Server",
      imgUrl: ecommerce,
      url:"#",
      github: "https://github.com/eyahya-khan/ecommerceShop"
    },
    {
      title: "Guess Who",
      description: "Guess one person and filter by different criteria",
      tech: "HTML5, CSS3, JavaScript",
      imgUrl: guessWho,
      url:"https://elegant-hypatia-dea1c6.netlify.app",
      github: "https://github.com/eyahya-khan/project-guess-who"
    },
    {
      title: "Tic tac toe",
      description: "Classic game",
      tech: "React",
      imgUrl: tictactoe,
      url:"https://hungry-mestorf-7f30e8.netlify.app",
      github: "https://github.com/eyahya-khan/react-tic-tac-toe"
    },
  ];

  const Game = [
    {
      title: "Cat store - Ecommerce App",
      description: "Ecommerce app using API",
      tech: "React Native, Expo.CLI",
      imgUrl: frostEcom,
      url:"https://expo.dev/@eyahyakhan/Cat-app",
      github: "https://github.com/eyahya-khan/ct-frost-api"
    },
    {
      title: "Online Education System",
      description: "Fetch data from API, It covers allmost everything of basic and advanced knowledge",
      tech: "React Native, Expo.CLI",
      imgUrl: onlineEdu,
      url:"https://expo.dev/@eyahyakhan/nativeFullProject",
      github: "https://github.com/eyahya-khan/nativeFullProject"
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
                <p>During study period I did lots of projects. Some of them are deployed in netlify.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Frontend</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Fullstack & Game</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">React Native App</Nav.Link>
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
                    <Row>
                        {
                          Fullstack.map((fullstack, index) => {
                            return (
                              <ProjectFullstackCard
                                key={index}
                                {...fullstack}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          Game.map((game, index) => {
                            return (
                              <ProjectGameCard
                                key={index}
                                {...game}
                                />
                            )
                          })
                        }
                      </Row>
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
