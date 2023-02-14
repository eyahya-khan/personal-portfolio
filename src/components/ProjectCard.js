import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, tech, url, github, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="I"/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span><br />
          <span>Using tech: {tech}</span><br /><br />
          <a href={url} target={'_blank'} rel="noreferrer">View on live</a><br />
          <a href={github} target={'_blank'} rel="noreferrer">Goto Github</a>
        </div>
      </div>
    </Col>
  )
}
