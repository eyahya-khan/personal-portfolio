import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 4000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills" data-testid = "skill">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn" data-testid = "skill-box">
                        <h2 data-testid = "skl-txt">Skills</h2>
                        <p>JavaScript, typeScript, Reactjs, Nextjs, React Native, Nodejs <br></br>C#, MVC, ASP.NET Core, Razor pages, LINQ, MS SQL server
                        <br></br>TDD, Figma, Mob, Scrum, SEO, UI/UX, REST API, Azure </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider" autoPlay={true} autoPlaySpeed={2000}>
                            <div className="item">
                                <img src={meter1} alt="I" />
                                <h5>Frontend Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="I" />
                                <h5>Backend Developement</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="I" />
                                <h5>UI/UX</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="I" />
    </section>
  )
}
